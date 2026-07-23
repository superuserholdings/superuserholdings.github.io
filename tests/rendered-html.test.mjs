import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /SuperSites/);
  assert.match(html, /SuperAgents/);
  assert.match(html, /SuperCare/);
  assert.match(html, /From idea to operating system/);
  assert.match(html, /Send secure request/);
  assert.match(html, /What should we help you build or fix/);
  assert.doesNotMatch(html, /CUSTOMER_INTAKE_TOKEN|x-supercore-intake-token|127\\.0\\.0\\.1:8091|127\\.0\\.0\\.1:5678/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});
