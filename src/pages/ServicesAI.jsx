function ServicesAI() {
  const capabilities = [
    { title: "AI Agent Architecture", desc: "Multi-agent design, task orchestration, workflow planning.", icon: "🤖" },
    { title: "On-Device AI", desc: "Model optimization, quantization, low-power inference.", icon: "📱" },
    { title: "Edge AI Systems", desc: "Real-time inferencing, event-driven AI triggers.", icon: "⚡" },
    { title: "Cloud AI Integration", desc: "LLM-based reasoning, vector search, workflows.", icon: "☁️" },
    { title: "Safety & Governance", desc: "Guardrails, monitoring, responsible AI practices.", icon: "🛡️" }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-green-100 to-teal-100 rounded-full text-sm font-medium text-green-700 mb-4">
          Services
        </div>
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">Agentic AI Systems</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Intelligent agent-based systems that operate autonomously across device, edge, and cloud.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4 flex items-center justify-center text-2xl shadow-lg">
                {cap.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{cap.title}</h4>
              <p className="text-sm text-gray-600">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Capabilities & Engagement Models</h3>
        <p className="text-gray-700 mb-6">
          Build intelligent, autonomous systems with AI agents that can reason, plan, and execute complex workflows across your technology stack.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
            <h5 className="font-semibold mb-2">Fixed-Scope</h5>
            <p className="text-sm text-gray-600">Well-defined deliverables with fixed timeline and budget.</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
            <h5 className="font-semibold mb-2">Time & Materials</h5>
            <p className="text-sm text-gray-600">Flexible engagement for evolving requirements.</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
            <h5 className="font-semibold mb-2">Dedicated Teams</h5>
            <p className="text-sm text-gray-600">Extended team augmentation for long-term needs.</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="/contact" className="inline-block px-8 py-3 btn-primary text-white rounded-lg font-medium">
            Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}

export default ServicesAI;
