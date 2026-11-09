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

test("renders the Super User Holdings product site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Super User Holdings \| Websites, Apps, Automation &amp; AI/);
  assert.match(html, /Build what your business/);
  assert.match(html, /Software that fits the way you work/);
  assert.match(html, /Three ways in/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders the products page with the interactive explorer", async () => {
  const response = await render("/products");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Six ways we can help/);
  assert.match(html, /SuperSites/);
  assert.match(html, /SuperAgents/);
  assert.match(html, /SuperCare/);
  assert.match(html, /Answer three questions/);
  assert.match(html, /aria-expanded/);
});

test("renders how-we-work, work, start, and publishing pages", async () => {
  for (const path of ["/how-we-work", "/work", "/start", "/responsible-publishing"]) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    const html = await response.text();
    assert.match(html, /Super User Holdings|SUPER USER/);
    assert.match(html, /href="\/start"/);
  }
  const startHtml = (await (await render("/start")).text());
  assert.match(startHtml, /name="email"/);
  assert.match(startHtml, /name="message"/);
  assert.match(startHtml, /Start the intake/);
  assert.match(startHtml, /data-customer-intake-form="supercore-3\.1"/);
});
