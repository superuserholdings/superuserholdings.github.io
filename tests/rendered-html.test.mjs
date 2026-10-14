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

const hiddenRoutes = [
  "/",
  "/products",
  "/company",
  "/start",
  "/responsible-publishing",
  "/privacy",
];

test("all public pages show only the neutral holding page", async () => {
  for (const path of hiddenRoutes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    const html = await response.text();
    assert.match(html, /Super User Holdings/);
    assert.match(html, /Our website is being updated/);
    assert.match(html, /Please check back soon/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    assert.doesNotMatch(
      html,
      /Supercore|Safeguard|AI Hypervisor|hardware-enforced|investor|intake|customer/i,
      `${path} should not disclose product or intake information`,
    );
  }
});

test("retired and previously indexed detail routes do not disclose site content", async () => {
  for (const path of ["/how-we-work", "/work", "/terms-of-service.html"]) {
    const response = await render(path);
    assert.equal(response.status, 404, `${path} should return 404`);
    const html = await response.text();
    assert.doesNotMatch(html, /Supercore|Safeguard|AI Hypervisor|hardware-enforced/i);
  }
});
