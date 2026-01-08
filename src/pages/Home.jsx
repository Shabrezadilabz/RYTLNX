import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <section className="grid md:grid-cols-2 gap-10 items-center mb-8">
        <div className="animate-fadeIn">
          <h1 className="text-4xl font-extrabold leading-tight">
            Building <span className="gradient-text">Future-Ready</span> Semiconductor & Technology Products
          </h1>
          <p className="mt-4 text-gray-600 text-lg">Accelerating silicon, hardware, embedded, connected systems, and AI innovation through comprehensive engineering expertise.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="px-6 py-3 btn-primary text-white rounded-lg font-medium shadow-lg">Contact Us</Link>
            <Link to="/services/chip" className="px-6 py-3 btn-secondary rounded-lg font-medium">Explore Services</Link>
          </div>
          <p className="mt-6 text-sm text-gray-500"><strong>Mission:</strong> Foster an ecosystem where innovation, trust and collaboration enable success for employees, customers and partners.</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl tech-hero-bg" style={{ height: '400px' }}>
          {/* Animated gradient background with layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-blue-600 to-indigo-700 opacity-70 mix-blend-multiply"></div>
          
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-radial-custom animate-mesh-1"></div>
            <div className="absolute inset-0 bg-gradient-radial-custom-2 animate-mesh-2"></div>
            <div className="absolute inset-0 bg-gradient-radial-custom-3 animate-mesh-3"></div>
          </div>

          {/* Complex circuit board pattern */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="complex-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  {/* Horizontal lines */}
                  <line x1="0" y1="20" x2="120" y2="20" stroke="white" strokeWidth="1.5" />
                  <line x1="0" y1="60" x2="120" y2="60" stroke="white" strokeWidth="1.5" />
                  <line x1="0" y1="100" x2="120" y2="100" stroke="white" strokeWidth="1.5" />
                  {/* Vertical lines */}
                  <line x1="30" y1="0" x2="30" y2="120" stroke="white" strokeWidth="1.5" />
                  <line x1="70" y1="0" x2="70" y2="120" stroke="white" strokeWidth="1.5" />
                  <line x1="110" y1="0" x2="110" y2="120" stroke="white" strokeWidth="1.5" />
                  {/* Connection nodes */}
                  <circle cx="30" cy="20" r="3" fill="white" className="animate-pulse" />
                  <circle cx="70" cy="60" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="110" cy="100" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  {/* Microchips */}
                  <rect x="25" y="15" width="10" height="10" fill="none" stroke="white" strokeWidth="1" />
                  <rect x="65" y="55" width="10" height="10" fill="none" stroke="white" strokeWidth="1" />
                  <rect x="105" y="95" width="10" height="10" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#complex-circuit)" />
            </svg>
          </div>

          {/* Advanced neural network with glowing connections */}
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Layer 1 */}
              <g filter="url(#glow)">
                <line x1="15%" y1="25%" x2="35%" y2="35%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" />
                <line x1="15%" y1="50%" x2="35%" y2="35%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <line x1="15%" y1="75%" x2="35%" y2="65%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <line x1="15%" y1="50%" x2="35%" y2="65%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              </g>
              {/* Layer 2 */}
              <g filter="url(#glow)">
                <line x1="35%" y1="35%" x2="55%" y2="30%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <line x1="35%" y1="35%" x2="55%" y2="50%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <line x1="35%" y1="65%" x2="55%" y2="50%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                <line x1="35%" y1="65%" x2="55%" y2="70%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
              </g>
              {/* Layer 3 */}
              <g filter="url(#glow)">
                <line x1="55%" y1="30%" x2="75%" y2="40%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <line x1="55%" y1="50%" x2="75%" y2="40%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
                <line x1="55%" y1="50%" x2="75%" y2="60%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <line x1="55%" y1="70%" x2="75%" y2="60%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
              </g>
              {/* Layer 4 */}
              <g filter="url(#glow)">
                <line x1="75%" y1="40%" x2="90%" y2="50%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <line x1="75%" y1="60%" x2="90%" y2="50%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              </g>
              {/* Nodes */}
              <circle cx="15%" cy="25%" r="5" fill="white" opacity="0.8" className="animate-pulse" />
              <circle cx="15%" cy="50%" r="5" fill="white" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <circle cx="15%" cy="75%" r="5" fill="white" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
              <circle cx="35%" cy="35%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
              <circle cx="35%" cy="65%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
              <circle cx="55%" cy="30%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="55%" cy="50%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
              <circle cx="55%" cy="70%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              <circle cx="75%" cy="40%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <circle cx="75%" cy="60%" r="6" fill="white" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              <circle cx="90%" cy="50%" r="7" fill="white" opacity="1" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            </svg>
          </div>

          {/* Hexagonal tech grid */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-grid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon points="30,0 60,15 60,37 30,52 0,37 0,15" fill="none" stroke="white" strokeWidth="0.5" opacity="0.6" />
                  <polygon points="30,8 52,19 52,41 30,52 8,41 8,19" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-grid)" />
            </svg>
          </div>

          {/* Binary code rain effect */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white text-xs font-mono animate-code-rain"
                style={{
                  left: `${i * 8.33}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                {Array.from({ length: 15 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')}
              </div>
            ))}
          </div>

          {/* Large 3D chip illustration */}
          <div className="absolute top-6 right-6 opacity-12 animate-float">
            <svg className="w-40 h-40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main chip body */}
              <rect x="35" y="35" width="50" height="50" fill="white" opacity="0.9" />
              <rect x="38" y="38" width="44" height="44" fill="none" stroke="white" strokeWidth="1" opacity="0.7" />
              <rect x="42" y="42" width="36" height="36" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
              
              {/* Inner grid */}
              <line x1="45" y1="35" x2="45" y2="85" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="55" y1="35" x2="55" y2="85" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="65" y1="35" x2="65" y2="85" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="75" y1="35" x2="75" y2="85" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="35" y1="45" x2="85" y2="45" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="35" y1="55" x2="85" y2="55" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="35" y1="65" x2="85" y2="65" stroke="white" strokeWidth="0.3" opacity="0.4" />
              <line x1="35" y1="75" x2="85" y2="75" stroke="white" strokeWidth="0.3" opacity="0.4" />
              
              {/* Chip pins - Left */}
              <line x1="5" y1="40" x2="35" y2="40" stroke="white" strokeWidth="2.5" />
              <line x1="5" y1="48" x2="35" y2="48" stroke="white" strokeWidth="2.5" />
              <line x1="5" y1="56" x2="35" y2="56" stroke="white" strokeWidth="2.5" />
              <line x1="5" y1="64" x2="35" y2="64" stroke="white" strokeWidth="2.5" />
              <line x1="5" y1="72" x2="35" y2="72" stroke="white" strokeWidth="2.5" />
              <line x1="5" y1="80" x2="35" y2="80" stroke="white" strokeWidth="2.5" />
              
              {/* Chip pins - Right */}
              <line x1="85" y1="40" x2="115" y2="40" stroke="white" strokeWidth="2.5" />
              <line x1="85" y1="48" x2="115" y2="48" stroke="white" strokeWidth="2.5" />
              <line x1="85" y1="56" x2="115" y2="56" stroke="white" strokeWidth="2.5" />
              <line x1="85" y1="64" x2="115" y2="64" stroke="white" strokeWidth="2.5" />
              <line x1="85" y1="72" x2="115" y2="72" stroke="white" strokeWidth="2.5" />
              <line x1="85" y1="80" x2="115" y2="80" stroke="white" strokeWidth="2.5" />
              
              {/* Chip pins - Top */}
              <line x1="40" y1="5" x2="40" y2="35" stroke="white" strokeWidth="2.5" />
              <line x1="48" y1="5" x2="48" y2="35" stroke="white" strokeWidth="2.5" />
              <line x1="56" y1="5" x2="56" y2="35" stroke="white" strokeWidth="2.5" />
              <line x1="64" y1="5" x2="64" y2="35" stroke="white" strokeWidth="2.5" />
              <line x1="72" y1="5" x2="72" y2="35" stroke="white" strokeWidth="2.5" />
              <line x1="80" y1="5" x2="80" y2="35" stroke="white" strokeWidth="2.5" />
              
              {/* Chip pins - Bottom */}
              <line x1="40" y1="85" x2="40" y2="115" stroke="white" strokeWidth="2.5" />
              <line x1="48" y1="85" x2="48" y2="115" stroke="white" strokeWidth="2.5" />
              <line x1="56" y1="85" x2="56" y2="115" stroke="white" strokeWidth="2.5" />
              <line x1="64" y1="85" x2="64" y2="115" stroke="white" strokeWidth="2.5" />
              <line x1="72" y1="85" x2="72" y2="115" stroke="white" strokeWidth="2.5" />
              <line x1="80" y1="85" x2="80" y2="115" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>

          {/* AI Brain with neural patterns */}
          <div className="absolute bottom-6 left-6 opacity-12 animate-float" style={{ animationDelay: '1.5s' }}>
            <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="40" r="28" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
              <path d="M 30 40 Q 30 55 50 65 Q 70 55 70 40" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
              <circle cx="40" cy="35" r="4" fill="white" opacity="0.9" />
              <circle cx="60" cy="35" r="4" fill="white" opacity="0.9" />
              <path d="M 35 48 Q 50 52 65 48" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" />
              
              {/* Neural connections inside brain */}
              <line x1="35" y1="30" x2="45" y2="40" stroke="white" strokeWidth="0.8" opacity="0.6" />
              <line x1="65" y1="30" x2="55" y2="40" stroke="white" strokeWidth="0.8" opacity="0.6" />
              <line x1="40" y1="45" x2="50" y2="50" stroke="white" strokeWidth="0.8" opacity="0.6" />
              <line x1="60" y1="45" x2="50" y2="50" stroke="white" strokeWidth="0.8" opacity="0.6" />
              
              {/* Body connections */}
              <line x1="50" y1="65" x2="50" y2="85" stroke="white" strokeWidth="2" opacity="0.8" />
              <line x1="50" y1="85" x2="35" y2="95" stroke="white" strokeWidth="2" opacity="0.8" />
              <line x1="50" y1="85" x2="65" y2="95" stroke="white" strokeWidth="2" opacity="0.8" />
            </svg>
          </div>

          {/* Data flow lines */}
          <div className="absolute inset-0 opacity-15">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-data-flow"
                style={{
                  top: `${20 + i * 15}%`,
                  width: '100%',
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>

          {/* Content with enhanced styling */}
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div className="relative z-10">
              <div className="text-white text-4xl font-bold mb-4 drop-shadow-2xl animate-fade-in-up tracking-tight">
                AI-Powered Chip Design
              </div>
              <div className="text-white/95 text-lg font-medium tracking-wide">
                Neural Networks • Semiconductor Innovation • Intelligent Systems
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced floating particles with glow */}
          <div className="particles">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="particle-glow"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${12 + Math.random() * 8}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 glass rounded-2xl p-8 shadow-xl card-hover">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="mt-4 text-gray-700">RTLYNX specializes in semiconductor and advanced technology product design services, helping customers build innovative and high-performance products. We believe in asking "Why" — understanding the reasoning behind every requirement, decision, and challenge our customers bring. This insight helps us reduce risk, deliver meaningful value, and build strong, purpose-driven engineering partnerships.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl">
            <h4 className="font-semibold text-lg mb-2">Values — Y.O.G.A.</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>Y — Youthful Spirit</strong>: Adaptive, energetic, and positive.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>O — Openness</strong>: Transparency and inclusivity.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>G — Giving Back</strong>: Social & environmental responsibility.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>A — Accountability</strong>: Ownership and integrity.</span></li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl">
            <h4 className="font-semibold text-lg mb-2">Purpose</h4>
            <p className="mt-3 text-sm text-gray-700">Combine mindful leadership and technology to create positive impact for employees, customers, partners, investors, and society.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="services" className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Our Services</h3>
          <p className="mt-2 text-gray-600 text-lg">Comprehensive engineering services across chip, hardware, systems, security and agentic AI.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl service-card shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <h4 className="font-semibold text-lg">Chip & Silicon Engineering</h4>
            <p className="mt-3 text-sm text-gray-600">From architecture to tape-out with industry-leading methodologies.</p>
            <Link to="/services/chip" className="text-sm text-green-600 mt-4 inline-flex items-center font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl service-card shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <h4 className="font-semibold text-lg">Agentic AI Systems</h4>
            <p className="mt-3 text-sm text-gray-600">AI agents, workflow automation, and intelligent systems operating across devices and cloud.</p>
            <Link to="/services/ai" className="text-sm text-green-600 mt-4 inline-flex items-center font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl service-card shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-lg">Advanced Hardware Platform Engineering</h4>
            <p className="mt-3 text-sm text-gray-600">High-density boards, performance-critical designs and compliance testing.</p>
            <Link to="/services/hardware" className="text-sm text-green-600 mt-4 inline-flex items-center font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl service-card shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💻</span>
            </div>
            <h4 className="font-semibold text-lg">Systems & Embedded Engineering</h4>
            <p className="mt-3 text-sm text-gray-600">Real-time software, system optimization and productization support.</p>
            <Link to="/services/embedded" className="text-sm text-green-600 mt-4 inline-flex items-center font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl service-card shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h4 className="font-semibold text-lg">Secured & Connected Ecosystems</h4>
            <p className="mt-3 text-sm text-gray-600">Device connectivity, cloud platforms, edge computing, and secure data pipelines.</p>
            <Link to="/services/connected" className="text-sm text-green-600 mt-4 inline-flex items-center font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="mt-16 glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-2">Leadership</h3>
        <p className="text-gray-600 mb-6">Meet our experienced leadership team</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl flex gap-4 items-start card-hover bg-white">
            <img src="/assets/images/Debi.jpg" className="w-20 h-20 object-cover rounded-full shadow-lg" alt="Debi" />
            <div>
              <div className="font-semibold text-lg">Debi Prasad Rath</div>
              <div className="text-sm text-green-600 mb-2">Founder & Director</div>
              <p className="text-sm text-gray-600">Seasoned industry leader with 20+ years in semiconductor and high-tech. Leadership roles at Capgemini, Happiest Minds, Tata Elxsi, CoreEL Technologies & Cadence.</p>
            </div>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl flex gap-4 items-start card-hover bg-white">
            <img src="/assets/images/Soumya.jpg" className="w-20 h-20 object-cover rounded-full shadow-lg" alt="Soumya" />
            <div>
              <div className="font-semibold text-lg">Soumya Rani Patro Rath</div>
              <div className="text-sm text-green-600 mb-2">Co-Founder & Director</div>
              <p className="text-sm text-gray-600">Chartered Accountant with 15+ years across Avery Dennison, HPE, DXC and CGI. Expert in financial planning and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
        <h3 className="text-2xl font-bold">Join Our Team</h3>
        <p className="mt-2 text-gray-600">We are building a team of curious builders. Send your resume to <a href="mailto:career@rtlynx.com" className="text-green-600 font-medium hover:underline">career@rtlynx.com</a>.</p>
        <Link to="/careers" className="mt-4 inline-block px-6 py-3 btn-primary text-white rounded-lg font-medium">
          View Open Positions
        </Link>
      </section>
    </main>
  );
}

export default Home;

