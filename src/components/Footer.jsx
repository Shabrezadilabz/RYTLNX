import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer py-6 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <img src="/assets/images/RTLYNX_LOGO.png" className="w-28 mb-2" alt="RTLYNX" />
            <p className="text-sm text-gray-300">Engineering semiconductor, hardware, embedded, connected systems, and AI products with purpose and precision.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services/chip">Services</Link></li>
              <li><Link to="/board">Board</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Services</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/services/chip">Chip & Silicon Engineering</Link></li>
              <li><Link to="/services/hardware">Hardware Platform Engineering</Link></li>
              <li><Link to="/services/embedded">Systems & Embedded</Link></li>
              <li><Link to="/services/connected">Secured & Connected Ecosystems</Link></li>
              <li><Link to="/services/ai">Agentic AI Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p className="text-sm">RTLYNX SEMICON INDIA PRIVATE LIMITED<br />No. 112, AKR Tech Park, 'B' Block, Ground Floor,<br />7th Mile, Off Hosur Road, Kudlu Gate,<br />Bangalore, Karnataka 560068<br />India</p>
            <p className="mt-3 text-sm">Phone: +91 903 637 9007<br />Email: <a href="mailto:info@rtlynx.com">info@rtlynx.com</a></p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">© 2025 RTLYNX SEMICON. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

