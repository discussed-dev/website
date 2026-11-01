import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { fetchChangelog } from "./lib/changelog";

// Fetched at build time; a failed fetch fails the build rather than publishing an empty changelog.
const releases = defineCollection({
  loader: {
    name: "extension-changelog",
    load: async ({ store, renderMarkdown }) => {
      store.clear();
      for (const release of await fetchChangelog()) {
        store.set({
          id: release.version,
          data: {
            version: release.version,
            date: release.date,
            summary: release.summary,
          },
          rendered: await renderMarkdown(release.details),
        });
      }
    },
  },
  schema: z.object({
    version: z.string(),
    date: z.string(),
    summary: z.string(),
  }),
});

export const collections = { releases };
