import assert from "node:assert/strict";
import test from "node:test";
import { parseChangelog } from "../src/lib/changelog.ts";

const SAMPLE = `# Changelog

Intro.

## 1.2.0 (2026-11-02)

Second release.

### Fixed

- A bug.

## 1.1.0 (2026-10-01)

### New

- A thing.
`;

test("parses releases newest first, splitting the summary from the lists", () => {
  assert.deepEqual(parseChangelog(SAMPLE), [
    {
      version: "1.2.0",
      date: "2026-11-02",
      summary: "Second release.",
      details: "### Fixed\n\n- A bug.",
    },
    {
      version: "1.1.0",
      date: "2026-10-01",
      summary: "",
      details: "### New\n\n- A thing.",
    },
  ]);
});

test("rejects a malformed release heading instead of dropping the entry", () => {
  assert.throws(
    () => parseChangelog("## 1.2 - Nov 2\n\nText."),
    /1\.2 - Nov 2/,
  );
});

test("rejects a changelog with no releases", () => {
  assert.throws(
    () => parseChangelog("# Changelog\n\nNothing yet."),
    /no releases/,
  );
});
