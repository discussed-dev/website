// The extension repo's CHANGELOG.md is the single source of release notes.
export const CHANGELOG_URL =
  "https://raw.githubusercontent.com/discussed-dev/extension/main/CHANGELOG.md";

export interface Release {
  version: string;
  date: string;
  /** One-line summary; empty for small patches that only have lists. */
  summary: string;
  /** Markdown for the New / Improved / Fixed lists. */
  details: string;
}

const HEADING = /^## (\d+\.\d+\.\d+) \((\d{4}-\d{2}-\d{2})\)$/;

function toRelease(version: string, date: string, lines: string[]): Release {
  const body = lines.join("\n").trim();
  const listsAt = body.search(/^### /m);
  const summary = (listsAt === -1 ? body : body.slice(0, listsAt)).trim();
  const details = listsAt === -1 ? "" : body.slice(listsAt).trim();
  return { version, date, summary, details };
}

export function parseChangelog(markdown: string): Release[] {
  const releases: Release[] = [];
  let current: { version: string; date: string; lines: string[] } | null = null;

  for (const line of markdown.split("\n")) {
    if (line.startsWith("## ")) {
      const match = HEADING.exec(line.trimEnd());
      if (!match) {
        throw new Error(
          `Changelog heading must be "## X.Y.Z (YYYY-MM-DD)": ${line}`,
        );
      }
      if (current)
        releases.push(toRelease(current.version, current.date, current.lines));
      current = { version: match[1], date: match[2], lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current)
    releases.push(toRelease(current.version, current.date, current.lines));
  if (releases.length === 0) throw new Error("Changelog has no releases");
  return releases;
}

export async function fetchChangelog(url = CHANGELOG_URL): Promise<Release[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetching ${url} failed: ${response.status}`);
  }
  return parseChangelog(await response.text());
}

/** "2026-11-01" to "November 1, 2026", independent of the build machine's time zone. */
export function formatReleaseDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
