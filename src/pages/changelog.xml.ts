import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://discussed.dev");
  const page = new URL("/changelog", base).href;
  const releases = (await getCollection("releases")).sort((a, b) =>
    b.data.version.localeCompare(a.data.version, undefined, { numeric: true }),
  );

  const items = await Promise.all(
    releases.map(async (release) => {
      const { version, date, summary } = release.data;
      const html = release.rendered?.html ?? "";
      const description =
        (summary ? `<p>${escapeXml(summary)}</p>` : "") + html;
      return `    <item>
      <title>Discussed ${version}</title>
      <link>${page}#v${version}</link>
      <guid isPermaLink="false">discussed-${version}</guid>
      <pubDate>${new Date(`${date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Discussed changelog</title>
    <link>${page}</link>
    <description>Releases of the Discussed browser extension.</description>
    <language>en</language>
${items.join("\n")}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
