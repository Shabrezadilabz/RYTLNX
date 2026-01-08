function ServicesHardware() {
  const capabilities = [
    { title: "Hardware System Architecture", desc: "Requirement analysis, interface & protocol definition, BOM optimization.", icon: "🎯" },
    { title: "High-Speed Board Design", desc: "Multi-layer PCB, SI/PI analysis, DDR/PCIe routing.", icon: "⚡" },
    { title: "Embedded Hardware Design", desc: "MCU/SoC boards, FPGA platforms, power design.", icon: "💻" },
    { title: "Prototyping & Validation", desc: "Schematics, PCB layout, EVT/DVT/PVT testing.", icon: "🔬" },
    { title: "Compliance & Certification", desc: "EMI/EMC, safety, RoHS/REACH.", icon: "✓" },
    { title: "Manufacturing Support", desc: "Gerber files, vendor coordination, test-jig design.", icon: "🏭" }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-medium text-orange-700 mb-4">
          Services
        </div>
        <h1 className="text-4xl font-bold mb-3">
          Advanced <span className="gradient-text">Hardware Platform Engineering</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          High-density, high-performance hardware platforms engineered for reliability and manufacturability.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 flex items-center justify-center text-2xl shadow-lg">
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
          From concept to production, we deliver hardware solutions that meet stringent performance, reliability, and cost requirements.
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

export default ServicesHardware;
