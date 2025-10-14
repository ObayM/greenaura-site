
const posts = [
    {
        slug: 'the-future-of-sustainable-tech',
        category: 'Innovation',
        date: 'October 12, 2023',
        title: 'The Future of Sustainable Technology',
        excerpt: 'Exploring the groundbreaking technologies that are paving the way for a carbon-neutral future, from AI-powered grids to bio-plastics.',
        content: `
            <p>The journey towards a sustainable future is paved with innovation. In recent years, the convergence of technology and environmental science has led to breakthroughs that were once the stuff of science fiction. These advancements are not just incremental improvements; they are paradigm shifts in how we generate power, produce goods, and manage our resources.</p>
            <p>One of the most exciting frontiers is the development of AI-powered energy grids. These "smart grids" can predict energy demand with remarkable accuracy, optimize distribution, and seamlessly integrate renewable sources like solar and wind. This minimizes waste and reduces our reliance on fossil fuels, creating a more resilient and efficient energy infrastructure.</p>
            <h2>The Rise of Bio-Plastics</h2>
            <p>Another critical area is the fight against plastic pollution. Bio-plastics, derived from renewable sources like corn starch or sugarcane, are emerging as a viable alternative. Unlike traditional plastics, many of these materials are biodegradable or compostable, breaking down without leaving harmful microplastics in our ecosystems. The challenge now lies in scaling production and creating a circular economy around these new materials.</p>
        `
    },
    {
        slug: 'community-action-small-steps-big-impact',
        category: 'Community',
        date: 'October 05, 2023',
        title: 'Community Action: Small Steps, Big Impact',
        excerpt: 'Discover how local initiatives are creating massive waves of change, proving that collective action is our greatest asset in the climate fight.',
        content: `<p>Change starts locally. This post explores the power of community-led climate action.</p>`
    },
];

export async function getPosts() {
    return posts;
}

export async function getPostBySlug(slug) {
    return posts.find((post) => post.slug === slug);
}