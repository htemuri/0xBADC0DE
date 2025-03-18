import Link from 'next/link'
import { PostCard } from 'nextra-theme-blog'
import { getProjects, getTags } from './get-projects'

export const metadata = {
    title: 'Projects'
}

export default async function ProjectsPage() {
    const tags = await getTags()
    const projects = await getProjects()
    const allTags = Object.create(null)

    for (const tag of tags) {
        allTags[tag] ??= 0
        allTags[tag] += 1
    }
    return (
        <div data-pagefind-ignore="all">
            <h1>{metadata.title}</h1>
            {/* <div
                className="not-prose"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
            >
                {Object.entries(allTags).map(([tag, count]) => (
                    <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
                        {tag} ({count})
                    </Link>
                ))}
            </div> */}

            {projects.map(project => (
                <PostCard key={project.route} post={project} />
            ))}
        </div>
    )
}