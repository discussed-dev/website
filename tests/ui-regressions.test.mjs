import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { join } from "node:path";
import { URL } from "node:url";

const projectRoot = new URL("..", import.meta.url);

function read(relativePath) {
  return readFileSync(new URL(relativePath, projectRoot), "utf8");
}

function readSourceTree(directory = "src") {
  const absoluteDirectory = new URL(`${directory}/`, projectRoot);

  return readdirSync(absoluteDirectory, {
    recursive: true,
    withFileTypes: true,
  })
    .filter((entry) => entry.isFile())
    .map((entry) => readFileSync(join(entry.parentPath, entry.name), "utf8"))
    .join("\n");
}

function relativeLuminance(hexColor) {
  const channels = hexColor
    .replace("#", "")
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground, background) {
  const luminances = [
    relativeLuminance(foreground),
    relativeLuminance(background),
  ].sort((left, right) => right - left);

  return (luminances[0] + 0.05) / (luminances[1] + 0.05);
}

test("install actions identify one primary store and avoid the obsolete Edge package", () => {
  const installLinks = read("src/data/install-links.ts");

  assert.equal((installLinks.match(/primary:\s*true/g) ?? []).length, 1);
  assert.match(installLinks, /label:\s*"Add to Chrome"/);
  assert.match(installLinks, /label:\s*"Add to Firefox"/);
  assert.match(installLinks, /label:\s*"Download Edge 0\.3\.8 ZIP"/);
  assert.match(installLinks, /v0\.3\.8\/discussed-0\.3\.8-chrome\.zip/);
  assert.doesNotMatch(installLinks, /v0\.1\.0/);
});

test("the product demo is user-controlled and does not autoplay as a GIF", () => {
  const hero = read("src/components/Hero.astro");

  assert.match(hero, /<video[\s\S]*controls/);
  assert.match(hero, /discussed-extension-summary-poster\.webp/);
  assert.match(hero, /discussed-extension\.webm/);
  assert.match(hero, /discussed-extension\.mp4/);
  assert.doesNotMatch(hero, /discussed-extension\.gif/);
});

test("the header wordmark inherits the page theme instead of using fixed SVG text", () => {
  const header = read("src/components/Header.astro");

  assert.match(header, /discussed-mark-brand\.svg/);
  assert.match(header, />\s*Discussed\s*<\/span\s*>/);
  assert.doesNotMatch(header, /discussed-logo\.svg/);
});

test("the desktop hero column can contain the display word without overlap", () => {
  const hero = read("src/components/Hero.astro");

  assert.match(hero, /shell-wide/);
  assert.match(hero, /minmax\(25rem,0\.9fr\)/);
  assert.match(hero, /grid gap-6/);
  assert.match(hero, /text-\[clamp\(2\.45rem,11vw,4rem\)\]/);
  assert.doesNotMatch(hero, /Source on GitHub/);
  assert.doesNotMatch(hero, /0\.8fr_minmax\(32rem,1\.5fr\)/);
});

test("small text and accent tokens meet WCAG AA contrast", () => {
  const styles = read("src/styles/global.css");
  const backgrounds = [...styles.matchAll(/--bg:\s*(#[0-9A-Fa-f]{6})/g)].map(
    (match) => match[1],
  );
  const mutedText = [
    ...styles.matchAll(/--text-muted:\s*(#[0-9A-Fa-f]{6})/g),
  ].map((match) => match[1]);
  const accents = [...styles.matchAll(/--accent:\s*(#[0-9A-Fa-f]{6})/g)].map(
    (match) => match[1],
  );

  assert.equal(backgrounds.length, 2);
  assert.equal(mutedText.length, 2);
  assert.equal(accents.length, 2);

  for (const [index, background] of backgrounds.entries()) {
    assert.ok(contrastRatio(mutedText[index], background) >= 4.5);
    assert.ok(contrastRatio(accents[index], background) >= 4.5);
  }

  assert.doesNotMatch(styles, /--text-faint:/);
});

test("product copy stays concrete and the page ends with an install action", () => {
  const source = readSourceTree();
  const finalCallToAction = read("src/components/FinalCta.astro");

  assert.doesNotMatch(source, /Nothing leaves your browser/);
  assert.doesNotMatch(source, /Three steps, no setup/);
  assert.doesNotMatch(source, /Free & Open Source/);
  assert.match(finalCallToAction, /Install Discussed/);
});

test("privacy copy describes user-triggered page reading and direct third-party requests", () => {
  const privacy = read("src/pages/privacy.astro");

  assert.match(privacy, /Only when you click/);
  assert.match(
    privacy,
    /sent directly from\s+your browser to the LLM provider/,
  );
  assert.doesNotMatch(privacy, /No other browser data is accessed/);
  assert.doesNotMatch(privacy, /All\s+extension data stays in your browser/);
});

test("source avoids common decorative AI-slop patterns", () => {
  const source = readSourceTree();

  assert.doesNotMatch(
    source,
    /bg-gradient|gradient-to-|background-clip:\s*text/,
  );
  assert.doesNotMatch(source, /backdrop-blur|glassmorphism/);
  assert.doesNotMatch(source, /rounded-full/);
  assert.doesNotMatch(source, /[🚀✨🔥⚡🎉]/u);
});

test("the page provides a skip link and semantic product workflow", () => {
  const base = read("src/layouts/Base.astro");
  const workflow = read("src/components/HowItWorks.astro");
  const hero = read("src/components/Hero.astro");

  assert.match(base, /href="#main-content"/);
  assert.match(base, /<main[^>]*id="main-content"/);
  assert.match(workflow, /<ol/);
  assert.match(workflow, /<li/);
  assert.doesNotMatch(workflow, /sm:grid-cols-3/);
  assert.match(
    hero,
    /aria-label="Discussed finding and summarizing discussions about an article"/,
  );
  assert.doesNotMatch(hero, /<figcaption/);
  assert.doesNotMatch(hero, /11-second silent demo/);
});

test("the landing page avoids a divider between every section", () => {
  const index = read("src/pages/index.astro");

  assert.ok((index.match(/divider shell/g) ?? []).length <= 1);
});

test("social metadata uses a canonical URL and a large raster product image", () => {
  const base = read("src/layouts/Base.astro");

  assert.match(base, /rel="canonical"/);
  assert.match(base, /discussed-social\.png/);
  assert.match(base, /property="og:image:width" content="1200"/);
  assert.match(base, /property="og:image:height" content="630"/);
  assert.match(base, /name="twitter:card" content="summary_large_image"/);
  assert.match(base, /name="twitter:image"/);
});

test("the build excludes obsolete media and loads only Latin font subsets", () => {
  const styles = read("src/styles/global.css");

  assert.equal(
    existsSync(new URL("public/media/discussed-extension.gif", projectRoot)),
    false,
  );
  assert.equal(
    existsSync(
      new URL("public/media/discussed-extension-poster.png", projectRoot),
    ),
    false,
  );
  assert.match(styles, /fraunces-latin-wght-normal\.woff2/);
  assert.match(styles, /instrument-sans-latin-wght-normal\.woff2/);
  assert.doesNotMatch(styles, /latin-ext|vietnamese/);
  assert.doesNotMatch(styles, /@import "@fontsource-variable/);
});
