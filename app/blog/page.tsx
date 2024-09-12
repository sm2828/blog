import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'thoughts',
  description: 'read my thoughts.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">my thoughts on some things.</h1>
      <BlogPosts />
    </section>
  )
}
