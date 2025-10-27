import { getPosts } from '@/lib/posts';
import BlogClientPage from './client.jsx';

export const metadata = {
  title: 'The GreenAura Journal',
  description: 'Insights, stories, and ideas for a sustainable future.',
};

export default async function BlogPage() {
    const posts = await getPosts();

    const allCategories = posts.map(post => post.category);
    const uniqueCategories = ['All', ...new Set(allCategories)];

    return (
        <BlogClientPage posts={posts} categories={uniqueCategories} />
    );
}