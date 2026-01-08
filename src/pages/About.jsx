function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3">
          About <span className="gradient-text">RTLYNX</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Pioneering semiconductor and advanced technology solutions through innovation, expertise, and purpose-driven engineering.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          RTLYNX specializes in semiconductor and advanced technology product design services, helping customers build innovative and high-performance products. We believe in asking <strong>"Why"</strong> — understanding the reasoning behind every requirement, decision, and challenge our customers bring. This insight helps us reduce risk, deliver meaningful value, and build strong, purpose-driven engineering partnerships.
        </p>
        
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Mission</h4>
            <p className="text-sm text-gray-600">To foster a thriving ecosystem where innovation, trust, and collaboration empower employees, customers, vendors, and investors to succeed.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">👁️</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Vision</h4>
            <p className="text-sm text-gray-600">To be the most dependable partner for engineering product makers by reducing the risks of software and hardware innovation.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">Purpose</h4>
            <p className="text-sm text-gray-600">To combine mindful leadership and technology to create positive impact for employees, customers, partners, investors, and society.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-3xl font-bold mb-3 text-center">Our Values (Y.O.G.A.)</h3>
        <p className="text-center text-gray-600 mb-8">Principles that guide everything we do</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-yellow-100 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 flex items-center justify-center mx-auto animate-float">
              <span className="text-white text-3xl font-bold">Y</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Youthful Spirit</h5>
            <p className="text-sm text-gray-600">Stay energetic, innovative and adaptive in challenges. Embrace change with enthusiasm.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mb-4 flex items-center justify-center mx-auto animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-white text-3xl font-bold">O</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Openness</h5>
            <p className="text-sm text-gray-600">Transparent communication and inclusiveness. Foster trust through honesty.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-4 flex items-center justify-center mx-auto animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-white text-3xl font-bold">G</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Giving Back</h5>
            <p className="text-sm text-gray-600">Social responsibility and community contribution. Make a positive impact.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4 flex items-center justify-center mx-auto animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-white text-3xl font-bold">A</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Accountability</h5>
            <p className="text-sm text-gray-600">Ownership, integrity and dependable delivery. Stand behind our commitments.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

