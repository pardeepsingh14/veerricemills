import React, { useState } from 'react';
import { ChefHat, Globe2, ChevronRight, Award, Compass, Sparkles } from 'lucide-react';

export default function RiceSommelier() {
  const [step, setStep] = useState(1);
  const [market, setMarket] = useState(null);
  const [culinary, setCulinary] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const marketOptions = [
    {
      id: 'luxury-me',
      title: 'Premium Middle East & Gulf',
      desc: 'High demand for extreme grain elongation and rich aroma for traditional feasts.',
      icon: <Globe2 size={24} />
    },
    {
      id: 'specialty-eu',
      title: 'European & Western Specialty',
      desc: 'Strict compliance with pesticide norms, organic certifications, and packaging purity.',
      icon: <Award size={24} />
    },
    {
      id: 'bulk-global',
      title: 'Global Bulk Distribution',
      desc: 'High-volume supply targeting stability, nutrition, and cost-efficiency.',
      icon: <Compass size={24} />
    }
  ];

  const culinaryOptions = [
    {
      id: 'biryani',
      title: 'Royal Biryani & Festivities',
      desc: 'Requires extra-long grains that remain completely separate and fluffy when steamed.',
      icon: <ChefHat size={24} />
    },
    {
      id: 'staple',
      title: 'Everyday Household Staple',
      desc: 'Soft, quick-cooking, aromatic grains suited for daily meals.',
      icon: <Sparkles size={24} />
    },
    {
      id: 'catering',
      title: 'Commercial Catering & Buffet',
      desc: 'Requires parboiled/sella grains that tolerate extended holding times without breaking.',
      icon: <Award size={24} />
    }
  ];

  const handleMarketSelect = (id) => {
    setMarket(id);
    setStep(2);
  };

  const handleCulinarySelect = (id) => {
    setCulinary(id);
    
    // Process Recommendation
    let match = {};
    if (market === 'luxury-me' && id === 'biryani') {
      match = {
        name: 'Veer Gold 1121 Steam Basmati',
        tagline: 'The Ultimate Emperor Grains',
        length: '8.35 mm',
        elongation: '2.2x',
        moisture: '12.0%',
        aroma: 'Premium Aromatic',
        description: 'Exquisite extra-long grains that elongates up to 20mm when cooked. Perfect for high-end Middle Eastern Mandi, Kabsa, and Biryani.'
      };
    } else if (market === 'specialty-eu') {
      match = {
        name: 'Veer Shahi Organic Basmati Raw',
        tagline: 'Purity Tested & EU Norm Compliant',
        length: '7.40 mm',
        elongation: '2.0x',
        moisture: '12.5%',
        aroma: 'Intense Organic Aroma',
        description: '100% pesticide-tested basmati grains grown using natural bio-fertilizers. Meets all strict European Union chemical residue thresholds.'
      };
    } else if (id === 'catering') {
      match = {
        name: 'Veer Classic Golden Sella Basmati',
        tagline: 'Unbreakable Caterer Grade',
        length: '8.20 mm',
        elongation: '1.8x',
        moisture: '12.0%',
        aroma: 'Subtle Parboiled Aroma',
        description: 'Parboiled grains that lock in the nutrients. Excellent grain strength holds up perfectly under intense reheating and commercial buffet styling.'
      };
    } else {
      match = {
        name: 'Veer Daily Premium Pusa Basmati',
        tagline: 'Perfect Everyday Fragrance',
        length: '7.20 mm',
        elongation: '1.9x',
        moisture: '12.5%',
        aroma: 'Gentle Basmati Aroma',
        description: 'Balanced long-grain basmati with rich daily nutrition. Offers identical cooking characteristics to premium basmati at bulk pricing.'
      };
    }

    setRecommendation(match);
    setStep(3);
  };

  const resetSommelier = () => {
    setMarket(null);
    setCulinary(null);
    setRecommendation(null);
    setStep(1);
  };

  const handleAutoFillInquiry = () => {
    const text = `Dear Veer Rice Mills, I ran your digital Rice Sommelier planner. I am interested in importing the recommended grade: "${recommendation.name}" for target market segment: "${market}" and culinary purpose: "${culinary}". Please provide pricing details and container delivery options.`;
    
    const element = document.getElementById('contact');
    if (element) {
      const textarea = document.getElementById('enquiry-message');
      if (textarea) {
        textarea.value = text;
      }
      
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="sommelier" className="section-padding sommelier-section" style={{ background: 'var(--surface-glass)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag" style={{ color: 'var(--accent-color)' }}>Bespoke Selector</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '400' }}>The Digital Rice Sommelier</h2>
          <p>
            An intelligent advisor designed to match your international market and culinary requirements with the perfect rice grade.
          </p>
        </div>

        <div className="sommelier-wizard-wrap glass-panel" style={{ maxWidth: '850px', margin: '0 auto', padding: '3.5rem', borderRadius: '32px' }}>
          {/* Step Indicators */}
          <div className="wizard-progress" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span style={{ color: step >= 1 ? 'var(--primary-color)' : 'var(--text-muted)', fontWeight: step >= 1 ? '700' : '400' }}>1. Target Market</span>
            <span style={{ color: step >= 2 ? 'var(--primary-color)' : 'var(--text-muted)', fontWeight: step >= 2 ? '700' : '400' }}>2. Culinary Purpose</span>
            <span style={{ color: step === 3 ? 'var(--primary-color)' : 'var(--text-muted)', fontWeight: step === 3 ? '700' : '400' }}>3. Expert Match</span>
          </div>

          {/* STEP 1: MARKET */}
          {step === 1 && (
            <div className="wizard-step animate-fade-in-up">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '400', textAlign: 'center', marginBottom: '2rem' }}>
                Select Your Core Import Region
              </h3>
              <div className="grid-3" style={{ gap: '1.5rem' }}>
                {marketOptions.map((opt) => (
                  <button 
                    key={opt.id} 
                    onClick={() => handleMarketSelect(opt.id)}
                    className="sommelier-card glass-panel"
                    style={{ textAlign: 'left', cursor: 'pointer', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px' }}
                  >
                    <div style={{ color: 'var(--accent-color)' }}>{opt.icon}</div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-bright)' }}>{opt.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: CULINARY */}
          {step === 2 && (
            <div className="wizard-step animate-fade-in-up">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '400', textAlign: 'center', marginBottom: '2rem' }}>
                What is the Primary Culinary Use?
              </h3>
              <div className="grid-3" style={{ gap: '1.5rem' }}>
                {culinaryOptions.map((opt) => (
                  <button 
                    key={opt.id} 
                    onClick={() => handleCulinarySelect(opt.id)}
                    className="sommelier-card glass-panel"
                    style={{ textAlign: 'left', cursor: 'pointer', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px' }}
                  >
                    <div style={{ color: 'var(--accent-color)' }}>{opt.icon}</div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-bright)' }}>{opt.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{opt.desc}</p>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: RECOMMENDATION */}
          {step === 3 && recommendation && (
            <div className="wizard-step animate-fade-in-up" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
              
              {/* Product Visual */}
              <div className="match-visual glass-panel" style={{ overflow: 'hidden', borderRadius: '24px', background: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>
                <img 
                  src="/basmati_grains.png" 
                  alt={recommendation.name} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>

              {/* Product Match details */}
              <div className="match-details" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-color)', letterSpacing: '1px' }}>
                    {recommendation.tagline}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '400', color: 'var(--text-bright)', marginTop: '0.25rem' }}>
                    {recommendation.name}
                  </h3>
                </div>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {recommendation.description}
                </p>

                {/* Spec parameters */}
                <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Avg Length</span>
                    <h5 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>{recommendation.length}</h5>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Elongation</span>
                    <h5 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>{recommendation.elongation}</h5>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Moisture</span>
                    <h5 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>{recommendation.moisture}</h5>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button onClick={handleAutoFillInquiry} className="btn btn-primary" style={{ padding: '0.75rem 1.8rem', borderRadius: '50px', fontSize: '0.85rem' }}>
                    Auto-Fill Quote Request
                  </button>
                  <button onClick={resetSommelier} className="btn btn-secondary" style={{ padding: '0.75rem 1.8rem', borderRadius: '50px', fontSize: '0.85rem' }}>
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
