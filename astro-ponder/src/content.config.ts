import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// create a collection that loads from markdown files.
// note: base is relative to the project root, so it needs the src/ prefix
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
});

// make sure to export the collection to have it be available to use.
export const collections = { posts };
