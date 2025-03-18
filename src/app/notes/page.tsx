import Link from 'next/link'
import { PostCard } from 'nextra-theme-blog'
import { getNotes, getTags } from './get-notes'

export const metadata = {
    title: 'Notes'
}

export default async function NotesPage() {
    const tags = await getTags()
    const notes = await getNotes()
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

            {notes.map(note => (
                <PostCard key={note.route} post={note} />
            ))}
        </div>
    )
}