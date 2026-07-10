import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ['home', 'about', 'milling', 'products', 'exports', 'calculator', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Our Heritage', target: 'about' },
    { label: 'Milling Tech', target: 'milling' },
    { label: 'Our Grains', target: 'products' },
    { label: 'Global Scale', target: 'exports' },
    { label: 'Rice Calculator', target: 'calculator' },
    { label: 'Inquiry', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo-wrap">
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C11.5 2 11 4 11 6C11 8.5 12.5 10 14 11C15.5 12 16 14 16 15C16 16.5 14.5 18 13 18C11.5 18 10 17 9.5 15.5C9.2 14.7 9.5 13.5 10 12.5C9 13.5 8 15 8 16.5C8 19 10 21 12.5 21C15.5 21 18 18.5 18 15C18 11.5 15.5 8.5 14 7C13 6 12 2 12 2Z" fill="var(--accent-color)" />
          </svg>
          <div className="logo-text">
            <span className="logo-title">VEER</span>
            <span className="logo-sub">RICE MILLS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
              className={`nav-link ${activeSection === item.target ? 'nav-link-active' : ''}`}
            >
              {item.label}
              {activeSection === item.target && <span className="active-dot" />}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="header-controls">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="theme-toggle-btn"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => handleNavClick('contact')} 
            className="btn btn-accent header-cta-btn"
          >
            <Sparkles size={16} />
            <span>Get Quote</span>
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
                className={`mobile-nav-link ${activeSection === item.target ? 'mobile-nav-link-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-accent" 
              style={{ width: '100%', marginTop: '1rem' }}
            >
              <Sparkles size={16} />
              <span>Get Quote</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
