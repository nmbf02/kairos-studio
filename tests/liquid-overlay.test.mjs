import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("each section owns a subtle liquid layer without changing text layout", async () => {
  const home = await readFile("app/page.tsx", "utf8");
  const coffee = await readFile("app/coffee-box/coffee-box-experience.tsx", "utf8");
  const css = await readFile("app/globals.css", "utf8");

  assert.equal((home.match(/<LiquidBackground/g) || []).length, 6);
  assert.equal((coffee.match(/<LiquidBackground subtle/g) || []).length, 4);
  assert.match(css, /\.liquid-shader\.liquid-subtle/);
  assert.doesNotMatch(css, /\.liquid-section>:not\(\.liquid-shader\)/);
});
