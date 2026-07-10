import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [floatingGrains, setFloatingGrains] = useState([]);

  // Generate random placement values for floating background grains after mount
  useEffect(() => {
    const grains = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 14}s`,
      duration: `${12 + Math.random() * 14}s`,
      width: `${4 + Math.random() * 6}px`,
      height: `${12 + Math.random() * 14}px`,
      transform: `rotate(${Math.random() * 360}deg)`
    }));
    setFloatingGrains(grains);
  }, []);

  const handleLearnMore = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleInquiry = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Floating Background Image (pardeepsingh.info style) */}
      <div className="hero-seller-bg-layer" />

      {/* Background Graphic elements */}
      <div className="hero-bg-glow" />
      <div className="hero-grid-overlay" />

      {/* Floating Rice Grains Particle Background */}
      <div className="floating-grains-bg">
        {floatingGrains.map((grain) => (
          <span 
            key={grain.id} 
            className="floating-grain" 
            style={{
              left: grain.left,
              animationDelay: grain.delay,
              animationDuration: grain.duration,
              width: grain.width,
              height: grain.height,
              transform: grain.transform
            }}
          />
        ))}
      </div>

      <div className="container hero-container" style={{ minHeight: '80vh' }}>
        <div className="hero-content animate-fade-in-up" style={{ zIndex: 10 }}>
          {/* Trust Badge */}
          <div className="trust-badge" style={{ background: 'rgba(30, 58, 39, 0.05)', color: 'var(--primary-color)' }}>
            <Star size={12} fill="var(--accent-color)" stroke="none" />
            <span>Luxury Grain Exporters Since 1994</span>
          </div>

          <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '4.5rem', fontWeight: '400', fontStyle: 'normal' }}>
            Nurtured by Nature, <br />
            <span className="gradient-accent-text" style={{ fontStyle: 'italic', fontWeight: '500' }}>Refined for Royalty</span>
          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: '300', color: 'var(--text-muted)' }}>
            Veer Rice Mills processes and exports the world's finest Basmati and non-Basmati rice. By combining traditional agricultural wisdom with state-of-the-art Sortex milling technology, we deliver premium grains to over 40+ countries.
          </p>

          <div className="hero-actions">
            <button onClick={handleInquiry} className="btn btn-primary" style={{ padding: '1rem 2.2rem', borderRadius: '50px' }}>
              <span>Send Import Inquiry</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={handleLearnMore} className="btn btn-secondary" style={{ padding: '1rem 2.2rem', borderRadius: '50px' }}>
              <span>Explore Our Heritage</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="hero-features" style={{ marginTop: '2rem' }}>
            <div className="feat-item">
              <Award size={18} color="var(--accent-color)" />
              <span>SGS & ISO Certified Quality</span>
            </div>
            <div className="feat-item">
              <ShieldCheck size={18} color="var(--accent-color)" />
              <span>100% Organic & Non-Pesticide Grades</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card (Organic frame rebrand) */}
        <div className="hero-visual animate-float" style={{ zIndex: 10 }}>
          <div className="hero-organic-frame">
            <img src="/hero_rice_field.png" alt="Veer Rice Mills Himalayan Terraces" />
            <div className="organic-badge">
              <strong>Himalayan Foothills</strong>
              <span>100% Natural Irrigation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
