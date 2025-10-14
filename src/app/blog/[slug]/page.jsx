import { getPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import BlogPostLayout from '@/components/BlogPostLayout';

export async function generateStaticParams() {
    const posts = await getPosts(); 
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const {slug} = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | GreenAura Journal`,
        description: post.excerpt,
    };
}

export default async function PostPage({ params }) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostLayout post={post} />;
}
