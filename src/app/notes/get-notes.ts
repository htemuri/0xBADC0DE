import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getNotes() {
  const { directories } = normalizePages({
    list: await getPageMap("/notes"),
    route: "/notes",
  });
  return directories
    .filter((note) => note.name !== "index")
    .sort(
      // @ts-ignore
      (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
    );
}

export async function getTags() {
  const notes = await getNotes();
  const tags = notes.flatMap((note) => note.frontMatter.tags);
  return tags;
}
