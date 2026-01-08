function Board() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3">Board of Directors</h1>
        <p className="text-gray-600 text-lg">Meet our experienced leadership team driving RTLYNX's vision</p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 card-hover border border-blue-100">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img src="/assets/images/Debi.jpg" className="w-32 h-32 object-cover rounded-2xl shadow-lg" alt="Debi" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👨‍💼</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Debi Prasad Rath</h3>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm rounded-full mb-3 font-medium">
                  Founder & Director
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Debi is a seasoned industry leader with more than two decades of experience in the semiconductor and high-technology sector. He has held influential leadership roles at <strong>Capgemini</strong>, <strong>Happiest Minds</strong>, <strong>Tata Elxsi</strong>, <strong>CoreEL Technologies</strong> & <strong>Cadence</strong>. His expertise spans semiconductor solutions, product engineering, and technology consulting.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Semiconductor</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Leadership</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">20+ Years</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 card-hover border border-purple-100">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img src="/assets/images/Soumya.jpg" className="w-32 h-32 object-cover rounded-2xl shadow-lg" alt="Soumya" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👩‍💼</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Soumya Rani Patro Rath</h3>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm rounded-full mb-3 font-medium">
                  Co-Founder & Director
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Soumya is a Chartered Accountant with 15+ years of corporate experience across <strong>Avery Dennison</strong>, <strong>HPE</strong>, <strong>DXC</strong>, and <strong>CGI</strong>. She leads financial planning, compliance, and governance for RTLYNX, bringing deep expertise in strategic financial management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Finance</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">Chartered Accountant</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">15+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Our Leadership Philosophy</h4>
              <p className="text-sm text-gray-700">Together, our directors bring complementary expertise in technology and business, creating a balanced leadership approach that drives innovation while ensuring financial sustainability and operational excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Board;

