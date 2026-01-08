import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="glass sticky top-0 z-50 w-full border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src="/assets/images/RTLYNX_LOGO.png" className="header-logo drop-shadow-md" alt="RTLYNX" />
        </Link>
        <nav className="hidden md:flex gap-5 items-center text-sm font-medium">
          <Link to="/" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/' ? 'text-green-500' : ''}`}>
            Home
            {location.pathname === '/' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/about" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/about' ? 'text-green-500' : ''}`}>
            About
            {location.pathname === '/about' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <div 
            className="relative group"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="hover:text-green-500 transition-all duration-300 flex items-center gap-1">
              Services 
              <svg className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute left-0 mt-3 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-xl p-6 w-96 transition-all duration-300 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              style={{ boxShadow: '0 10px 40px rgba(108, 192, 74, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)' }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold mb-2 text-gray-900">Chip Engineering</h4>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/chip">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Architecture & RTL
                    </span>
                  </Link>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/chip">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Verification & PD
                    </span>
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold mb-2 text-gray-900">Hardware</h4>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/hardware">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      High-Speed PCB
                    </span>
                  </Link>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/hardware">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Prototyping
                    </span>
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold mb-2 text-gray-900">Embedded</h4>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/embedded">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Firmware & RTOS
                    </span>
                  </Link>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/embedded">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Linux & Drivers
                    </span>
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold mb-2 text-gray-900">Connected & AI</h4>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/connected">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      IoT, Edge & Cloud
                    </span>
                  </Link>
                  <Link className="block text-sm hover:text-green-500 transition-all hover:translate-x-1 duration-200" to="/services/ai">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      Agentic AI
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/board" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/board' ? 'text-green-500' : ''}`}>
            Board
            {location.pathname === '/board' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/careers" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/careers' ? 'text-green-500' : ''}`}>
            Careers
            {location.pathname === '/careers' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/blogs" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/blogs' ? 'text-green-500' : ''}`}>
            Blogs
            {location.pathname === '/blogs' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/contact" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/contact' ? 'text-green-500' : ''}`}>
            Contact
            {location.pathname === '/contact' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <a 
            href="https://www.linkedin.com/company/rtlynx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 text-sm bg-gradient-to-r from-[#0077b5] to-[#005885] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
          >
            Connect
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            aria-label="menu" 
            className="p-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 animate-slideDown shadow-lg">
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/services/chip" onClick={toggleMobileMenu}>Services</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/board" onClick={toggleMobileMenu}>Board</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/careers" onClick={toggleMobileMenu}>Careers</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/contact" onClick={toggleMobileMenu}>Contact</Link>
          <a href="https://www.linkedin.com/company/rtlynx" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 bg-gradient-to-r from-[#0077b5] to-[#005885] text-white hover:from-[#005885] hover:to-[#004060] transition-all text-sm">Connect on LinkedIn</a>
        </div>
      )}
    </header>
  );
}

export default Header;

