import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getProjects() {
  const { directories } = normalizePages({
    list: await getPageMap("/projects"),
    route: "/projects",
  });
  return directories
    .filter((project) => project.name !== "index")
    .sort(
      // @ts-ignore
      (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
    );
}

export async function getTags() {
  const projects = await getProjects();
  const tags = projects.flatMap((project) => project.frontMatter.tags);
  return tags;
}
