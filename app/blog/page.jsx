const Blog = () => {
  return (
    <main className="flex flex-col container mx-auto py-12 xl:py-24 h-full">
      <h1 className="text-4xl font-semibold mb-8">
        My <span className="text-accent">Blog</span>
      </h1>
      <p className="text-white/60 mb-12">
        Coming soon! Stay tuned for updates on my latest thoughts, projects, and tutorials.
      </p>
      {/* Blog content here */}
    </main>
  );
};

export default Blog;
