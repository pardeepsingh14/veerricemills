import React, { useEffect, useState } from 'react';
import { Award, Leaf, ShieldAlert, Cpu } from 'lucide-react';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    if (incrementTime < 10) incrementTime = 10; // clamp to 10ms min limit

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function About() {
  const stats = [
    { value: '250000', suffix: '+ MT', label: 'Annual Milling Capacity' },
    { value: '42', suffix: '+', label: 'Countries Exported To' },
    { value: '15', suffix: 'k+', label: 'Happy Farmers Network' },
    { value: '99', suffix: '.8%', label: 'Purity Inspection Score' },
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Our Heritage</span>
          <h2>Blending Traditional Roots With Future Processing</h2>
          <p>
            For decades, Veer Rice Mills has stood as a hallmark of purity. Situated in the heartland of India's fertile rice belt, we combine natural basmati inheritance with revolutionary milling technologies.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem', alignItems: 'center' }}>
          <div className="about-text-content">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              Why Global Importers Choose <span className="gradient-accent-text">Veer Rice Mills</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We don't just process rice; we nurture partnerships. From monitoring seed distribution among local farmers to executing multi-stage polishing and sorting, our processes are optimized for global compliance.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our facilities incorporate the latest Buhler color sorting systems, ensuring that every grain shipped is uniform in color, free from impurities, and compliant with European Union pesticide norms.
            </p>
            
            <div className="about-pillars">
              <div className="pillar-card glass-panel">
                <Leaf size={24} color="var(--accent-color)" />
                <div>
                  <h4>100% Traceability</h4>
                  <p>Track your batch from harvest in the fields to container sealing.</p>
                </div>
              </div>
              <div className="pillar-card glass-panel">
                <Cpu size={24} color="var(--accent-color)" />
                <div>
                  <h4>Sortex Cleaning</h4>
                  <p>Advanced optical camera grading removes all discolored grains.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase (Card Stack) */}
          <div className="about-visual-showcase">
            <div className="visual-image-card glass-panel">
              <div className="badge-highlight">Established Quality</div>
              <div className="rice-grains-closeup" style={{ height: '260px', overflow: 'hidden' }}>
                <img src="/premium_bag.png" alt="Veer Basmati Rice Luxury Sack" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4>Grown in the Himalayan Foothills</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Our premium basmati varieties are irrigated by mineral-rich snowmelt from the Himalayas, yielding longer grains and unmatched aroma.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid-4 stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-card glass-panel" key={idx}>
              <h3>
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
