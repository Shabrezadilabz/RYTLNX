function Blogs() {
  const actualBlogs = [
    {
      title: "Chip-to-Cloud Engineering: Why Integration Matters",
      description: "How unified engineering accelerates product development from silicon design to cloud deployment, reducing time-to-market and improving system reliability.",
      date: "January 15, 2025",
      category: "Engineering"
    },
    {
      title: "The Rise of Edge AI in Real-World Systems",
      description: "Why edge intelligence is becoming essential for modern IoT and embedded systems, enabling real-time decision-making without cloud dependency.",
      date: "January 8, 2025",
      category: "AI & Technology"
    },
    {
      title: "Building Secure IoT Ecosystems",
      description: "Principles of secure device-to-cloud engineering, covering encryption, authentication, and best practices for protecting connected systems.",
      date: "December 20, 2024",
      category: "Security"
    }
  ];

  const placeholderBlogs = Array.from({ length: 20 }, (_, i) => ({
    title: `Insight ${i + 4}: Future of Semiconductor Design`,
    description: "Exploring emerging trends and technologies in semiconductor engineering and product development.",
    date: "Coming Soon",
    category: "Technology"
  }));

  const allBlogs = [...actualBlogs, ...placeholderBlogs];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold">Insights & Perspectives</h1>
        <p className="mt-2 text-gray-600">Thought leadership on semiconductor, embedded, hardware, IoT, and agentic AI.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {allBlogs.map((blog, index) => (
            <div key={index} className={`p-4 border rounded hover:shadow-lg transition-all duration-300 ${index < 3 ? 'bg-white' : 'bg-gray-50 opacity-75'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-green-600 font-semibold">{blog.category}</span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              <h4 className="font-semibold mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-600">{blog.description}</p>
              {index < 3 && (
                <a href="#" className="text-sm text-green-600 mt-3 inline-block hover:underline">Read more →</a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blogs;
