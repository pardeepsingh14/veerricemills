import React, { useState } from 'react';
import { Send, Globe, Award, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-wrap" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--surface-color)', padding: '5rem 0 2.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '4rem', marginBottom: '4rem' }} className="footer-grid">
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg style={{ width: '28px', height: '28px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C11.5 2 11 4 11 6C11 8.5 12.5 10 14 11C15.5 12 16 14 16 15C16 16.5 14.5 18 13 18C11.5 18 10 17 9.5 15.5C9.2 14.7 9.5 13.5 10 12.5C9 13.5 8 15 8 16.5C8 19 10 21 12.5 21C15.5 21 18 18.5 18 15C18 11.5 15.5 8.5 14 7C13 6 12 2 12 2Z" fill="var(--accent-color)" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '1px', color: 'var(--text-bright)', lineHeight: '1' }}>VEER</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: '700', letterSpacing: '2px', color: 'var(--accent-color)', marginTop: '2px' }}>RICE MILLS</span>
              </div>
            </a>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Processors and exporters of premium Grade-A Basmati and Non-Basmati rice. Empowering local farming communities while catering to global culinary standards.
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>APEDA Approved Exporter</span>
              <span>•</span>
              <span>ISO 22000 Certified</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }} style={{ transition: 'color 0.2s' }}>Our Heritage</a></li>
              <li><a href="#milling" onClick={(e) => { e.preventDefault(); handleScrollTo('milling'); }} style={{ transition: 'color 0.2s' }}>Milling Technology</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); handleScrollTo('products'); }} style={{ transition: 'color 0.2s' }}>Our Grain Catalog</a></li>
              <li><a href="#exports" onClick={(e) => { e.preventDefault(); handleScrollTo('exports'); }} style={{ transition: 'color 0.2s' }}>Logistics & Exports</a></li>
              <li><a href="#calculator" onClick={(e) => { e.preventDefault(); handleScrollTo('calculator'); }} style={{ transition: 'color 0.2s' }}>Bulk Planner Tool</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>Market Updates</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Subscribe to get seasonal harvest reports, pricing alerts, and ocean freight updates.
            </p>
            
            {subscribed ? (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#10b981', fontSize: '0.85rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <CheckCircle2 size={16} />
                <span>Subscription Confirmed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  required
                  className="form-input"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                />
                <button type="submit" className="btn btn-accent" style={{ padding: '0.6rem 1rem' }} aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright and signature */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>© {new Date().getFullYear()} Veer Rice Mills. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="#terms" style={{ transition: 'color 0.2s' }}>Terms of Export</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
