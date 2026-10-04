import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Super User Holdings Supercore OS home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Super User Holdings \| Supercore OS/);
  assert.match(html, /Give AI a foundation/);
  assert.match(html, /hardware-enforced off switch/);
  assert.match(html, /Three ways in/);
  assert.doesNotMatch(html, /SuperSites|SuperAutomations|small businesses/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders the products page with the interactive explorer", async () => {
  const response = await render("/products");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Three pieces\. One idea\./);
  assert.match(html, /Supercore OS/);
  assert.match(html, /AI Hypervisor/);
  assert.match(html, /Safeguard/);
  assert.match(html, /Which one are you\?/);
  assert.match(html, /aria-expanded/);
  assert.doesNotMatch(html, /SuperSites|SuperAgents|SuperCare/);
});

test("renders company, start, and publishing pages", async () => {
  for (const path of ["/company", "/start", "/responsible-publishing", "/privacy"]) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    const html = await response.text();
    assert.match(html, /Super User Holdings|SUPER USER/);
    assert.match(html, /href="\/start"/);
  }
  const companyHtml = await (await render("/company")).text();
  assert.match(companyHtml, /off switch/);
  assert.match(companyHtml, /invest/);
  const startHtml = await (await render("/start")).text();
  assert.match(startHtml, /name="email"/);
  assert.match(startHtml, /name="message"/);
  assert.match(startHtml, /Start the intake/);
  assert.match(startHtml, /data-customer-intake-form="supercore-3\.1"/);
  assert.match(startHtml, /about=investor/);
});

test("retired agency routes are gone", async () => {
  for (const path of ["/how-we-work", "/work"]) {
    const response = await render(path);
    assert.equal(response.status, 404, `${path} should return 404`);
  }
});
