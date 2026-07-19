import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("Netlify uses the native Next.js build output", async () => {
  const config = await readFile("netlify.toml", "utf8");
  const pkg = JSON.parse(await readFile("package.json", "utf8"));

  assert.match(config, /command = "npm run build:netlify"/);
  assert.match(config, /publish = "\.next"/);
  assert.equal(pkg.scripts["build:netlify"], "next build");
});
