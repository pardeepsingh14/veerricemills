import React, { useState } from 'react';
import { Globe, Plane, ShieldCheck, Ship } from 'lucide-react';

export default function ExportMap() {
  const [activeHub, setActiveHub] = useState(null);

  const hubs = [
    { id: 'dubai', name: 'Dubai (UAE) Hub', region: 'Middle East', rice: '1121 Sella Basmati', transit: '5 Days (Ocean)', coords: { x: 118, y: 88 } },
    { id: 'riyadh', name: 'Riyadh (Saudi Arabia)', region: 'Middle East', rice: 'Golden Sella & Pusa Raw', transit: '7 Days (Ocean)', coords: { x: 110, y: 92 } },
    { id: 'london', name: 'London (UK) Port', region: 'Europe', rice: 'Organic Traditional Basmati', transit: '18 Days (Ocean)', coords: { x: 80, y: 55 } },
    { id: 'newyork', name: 'New York (USA) Hub', region: 'North America', rice: 'Super Long Grain 1121', transit: '24 Days (Ocean)', coords: { x: 42, y: 64 } },
    { id: 'rotterdam', name: 'Rotterdam (Netherlands)', region: 'Europe', rice: 'EU Standard Non-Pesticide Basmati', transit: '16 Days (Ocean)', coords: { x: 85, y: 53 } },
    { id: 'singapore', name: 'Singapore Port', region: 'Asia-Pacific', rice: 'PR11 & Sharbati Steam', transit: '6 Days (Ocean)', coords: { x: 145, y: 114 } },
  ];

  return (
    <section id="exports" className="section-padding exports-section" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Global Footprint</span>
          <h2>Exporting Pure Quality Worldwide</h2>
          <p>
            Veer Rice Mills maintains major shipping lanes to over 40+ countries. We handle all logistics, phytosanitary checks, and customs sealing.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Info Details panel */}
          <div className="export-info-panel animate-fade-in-up">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              Seamless Global <span className="gradient-accent-text">Supply Chains</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our dedicated logistics wing executes custom packing, loading verification, and phytosanitary certifications. We partner with top-tier ocean carriers (Maersk, MSC, CMA CGM) to ensure punctual container delivery.
            </p>

            <div className="shipping-capabilities" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="cap-item glass-panel" style={{ display: 'flex', gap: '1rem', padding: '1.25rem', borderRadius: '16px' }}>
                <Ship size={24} color="var(--accent-color)" />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Custom Shipping Sealing</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Containers are sealed directly at our milling factory to prevent humidity or contamination during transit.</p>
                </div>
              </div>
              
              <div className="cap-item glass-panel" style={{ display: 'flex', gap: '1rem', padding: '1.25rem', borderRadius: '16px' }}>
                <Globe size={24} color="var(--accent-color)" />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Export Customs Clearance</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Full documentation package, including Certificate of Origin, Phytosanitary Certificate, and Fumigation treatment reports.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive World Map SVG */}
          <div className="export-map-visual">
            <div className="map-card glass-panel" style={{ padding: '1.5rem', borderRadius: '24px', position: 'relative' }}>
              <div className="map-title-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '600' }}>Global Distribution Map</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>● Active Shipping Routes</span>
              </div>
              
              <div className="svg-container" style={{ position: 'relative' }}>
                {/* World Map Outline SVG */}
                <svg viewBox="0 0 200 150" className="world-map-svg" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', background: 'rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                  {/* Basic representations of world land masses for styling */}
                  {/* Americas */}
                  <path d="M 20 40 Q 30 35 45 45 T 50 80 Q 40 100 45 120 L 35 140 L 25 110 Z" fill="var(--border-color)" opacity="0.3" />
                  {/* Eurasia & Africa */}
                  <path d="M 70 30 Q 90 20 120 25 T 160 30 Q 180 50 170 70 L 150 110 Q 140 130 150 140" fill="var(--border-color)" opacity="0.3" />
                  <path d="M 70 70 Q 90 65 110 80 T 115 110 Q 100 130 90 140 L 80 120 Z" fill="var(--border-color)" opacity="0.2" />

                  {/* India (Origin Point) */}
                  <circle cx="125" cy="85" r="3.5" fill="var(--accent-bright)" />
                  <circle cx="125" cy="85" r="8" fill="none" stroke="var(--accent-color)" strokeWidth="1" className="ping-animation" style={{ transformOrigin: '125px 85px' }} />

                  {/* Active Shipping Hubs */}
                  {hubs.map((hub) => (
                    <g 
                      key={hub.id}
                      onMouseEnter={() => setActiveHub(hub)}
                      onMouseLeave={() => setActiveHub(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Connection Line from India */}
                      <path 
                        d={`M 125 85 Q ${(125 + hub.coords.x) / 2} ${(85 + hub.coords.y) / 2 - 10} ${hub.coords.x} ${hub.coords.y}`}
                        fill="none"
                        stroke={activeHub?.id === hub.id ? 'var(--accent-color)' : 'var(--border-color)'}
                        strokeWidth={activeHub?.id === hub.id ? '1.5' : '0.75'}
                        strokeDasharray="3 3"
                      />
                      
                      {/* Hub Circle dot */}
                      <circle 
                        cx={hub.coords.x}
                        cy={hub.coords.y}
                        r={activeHub?.id === hub.id ? '4' : '2.5'}
                        fill={activeHub?.id === hub.id ? 'var(--accent-bright)' : 'var(--text-muted)'}
                        style={{ transition: 'all 0.2s' }}
                      />
                    </g>
                  ))}
                </svg>

                {/* Hover overlay information */}
                {activeHub && (
                  <div className="map-tooltip glass-panel animate-fade-in-up" style={{ position: 'absolute', top: '10px', left: '10px', padding: '0.75rem 1rem', borderRadius: '12px', zIndex: 10, maxWidth: '200px' }}>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>{activeHub.name}</h4>
                    <p style={{ fontSize: '0.75rem', margin: '2px 0' }}><strong>Export Grains:</strong> {activeHub.rice}</p>
                    <p style={{ fontSize: '0.75rem', margin: '2px 0', color: 'var(--text-muted)' }}><strong>Transit:</strong> {activeHub.transit}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
