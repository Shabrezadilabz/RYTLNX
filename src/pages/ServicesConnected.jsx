function ServicesConnected() {
  const capabilities = [
    { title: "IoT Device Connectivity", desc: "MQTT, CoAP, secure provisioning, OTA updates.", icon: "📱" },
    { title: "Edge Computing", desc: "On-device inference, data filtering, low-latency pipelines.", icon: "⚡" },
    { title: "Cloud Platforms", desc: "AWS IoT, Azure IoT, telemetry pipelines, dashboards.", icon: "☁️" },
    { title: "Security Engineering", desc: "Secure boot, identity, encryption, device attestation.", icon: "🔒" },
    { title: "Data Pipeline Design", desc: "Telemetry ingestion, event processing, analytics.", icon: "📊" }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-medium text-cyan-700 mb-4">
          Services
        </div>
        <h1 className="text-4xl font-bold mb-3">
          Secured & <span className="gradient-text">Connected Ecosystems</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Device–Edge–Cloud engineering with built-in security, reliability, and scalability.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center text-2xl shadow-lg">
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
          Build secure, scalable connected systems from device to cloud with our comprehensive IoT and cloud engineering expertise.
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

export default ServicesConnected;
