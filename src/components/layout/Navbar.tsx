import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full border-b border-gray-100 relative bg-white z-50">
      <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">B</div>
          <span className="text-lg font-bold text-gray-900">Botanico</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-500">
          {links.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-gray-900 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-[13px] font-medium text-gray-500 hover:text-gray-900">Log in</Link>
          <Link to="/register" className="bg-brand text-white px-4 py-1.5 rounded text-[13px] font-medium hover:bg-brand-dark transition-colors">Sign up</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[14px] font-medium text-gray-700 hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link to="/login" className="text-[14px] font-medium text-gray-700" onClick={() => setIsOpen(false)}>Log in</Link>
            <Link to="/register" className="bg-brand text-white px-4 py-2 rounded text-[14px] font-medium text-center" onClick={() => setIsOpen(false)}>Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
