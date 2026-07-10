import React, { useState } from 'react';
import { Layers, Check, Plus, Minus, X, Info } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('basmati');
  const [comparedProducts, setComparedProducts] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const products = [
    {
      id: 'trad-bas',
      name: 'Traditional Basmati Rice',
      category: 'basmati',
      length: '7.4 mm',
      elongation: '2.0x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Rich & Intense',
      tag: 'Royal Choice',
      desc: 'Known as the queen of fragrance. Aged naturally for 12 months to bring out maximum aroma and grain separation upon cooking.'
    },
    {
      id: '1121-steam',
      name: '1121 Steam Basmati Rice',
      category: 'basmati',
      length: '8.35 mm',
      elongation: '2.2x',
      moisture: '12.5%',
      broken: '< 0.5%',
      aroma: 'Excellent Fragrance',
      tag: 'Best Exporter Grade',
      desc: 'The longest grain Basmati available globally. Exceptional cooking quality, non-sticky texture, and fluffy elongation.'
    },
    {
      id: '1509-sella',
      name: '1509 Golden Sella Basmati',
      category: 'basmati',
      length: '8.2 mm',
      elongation: '1.8x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Subtle & Sweet',
      tag: 'Biryani Special',
      desc: 'Parboiled Basmati with a golden tint. The tough grain surface prevents breaking during bulk cooking, making it the choice for caterers.'
    },
    {
      id: 'pusa-raw',
      name: 'Pusa Basmati Raw',
      category: 'basmati',
      length: '7.2 mm',
      elongation: '1.9x',
      moisture: '12.5%',
      broken: '< 1%',
      aroma: 'Aromatic & Light',
      tag: 'Daily Premium',
      desc: 'Affordable yet aromatic basmati grain. Offers the classic scent and fluffiness, ideal for premium daily meals.'
    },
    {
      id: 'pr11-non',
      name: 'PR11 Premium Non-Basmati',
      category: 'non-basmati',
      length: '6.8 mm',
      elongation: '1.4x',
      moisture: '13.0%',
      broken: '< 5%',
      aroma: 'Mild',
      tag: 'High Nutritional Value',
      desc: 'A long-grain non-basmati variety. Highly popular in African and Middle Eastern households for everyday staple consumption.'
    },
    {
      id: 'ir64-non',
      name: 'IR64 White 5% Broken',
      category: 'non-basmati',
      length: '6.0 mm',
      elongation: '1.2x',
      moisture: '14.0%',
      broken: '< 5%',
      aroma: 'Neutral',
      tag: 'Economical Staple',
      desc: 'Highly demanded short/medium grain non-basmati rice. Highly cleaned and double polished on our modern processing lines.'
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeTab);

  const toggleCompare = (product) => {
    if (comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter(p => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 3) {
        alert('You can compare a maximum of 3 products at a time.');
        return;
      }
      setComparedProducts([...comparedProducts, product]);
    }
  };

  return (
    <section id="products" className="section-padding products-section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Our Product Range</span>
          <h2>The Gold Standard Of Grains</h2>
          <p>
            Explore our curated catalog of Basmati and Non-Basmati rice. Every batch undergoes testing before export sealing.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="products-tabs-wrap">
          <button 
            className={`tab-btn ${activeTab === 'basmati' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('basmati')}
          >
            Premium Basmati
          </button>
          <button 
            className={`tab-btn ${activeTab === 'non-basmati' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('non-basmati')}
          >
            Non-Basmati Staple
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid-3 product-grid">
          {filteredProducts.map((product) => {
            const isCompared = comparedProducts.some(p => p.id === product.id);
            return (
              <div className="product-card glass-panel" key={product.id}>
                {/* Visual Thumbnail */}
                <div className="product-thumbnail" style={{ height: '150px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  <img src="/basmati_grains.png" alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="product-thumb-img" />
                </div>
                <div className="product-header">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                </div>
                
                <p className="product-desc">{product.desc}</p>
                
                <div className="product-specs">
                  <div className="spec-row">
                    <span>Average Length</span>
                    <strong>{product.length}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Elongation Ratio</span>
                    <strong>{product.elongation}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Moisture Content</span>
                    <strong>{product.moisture}</strong>
                  </div>
                </div>

                <div className="product-actions">
                  <button 
                    onClick={() => toggleCompare(product)} 
                    className={`btn ${isCompared ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem' }}
                  >
                    {isCompared ? <Check size={16} /> : <Plus size={16} />}
                    <span>{isCompared ? 'Added to Compare' : 'Add to Compare'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Compare Sheet bar */}
        {comparedProducts.length > 0 && (
          <div className="compare-bar-wrap glass-panel animate-fade-in-up">
            <div className="compare-bar-content">
              <div className="selected-items">
                <span className="compare-title">Compare Grains ({comparedProducts.length}/3):</span>
                {comparedProducts.map(p => (
                  <span key={p.id} className="selected-tag">
                    {p.name}
                    <button onClick={() => toggleCompare(p)}><X size={12} /></button>
                  </span>
                ))}
              </div>
              <div className="compare-actions">
                <button onClick={() => setComparedProducts([])} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.85rem' }}>
                  Clear All
                </button>
                <button onClick={() => setShowCompareModal(true)} className="btn btn-accent" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Compare Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Modal Dialog */}
        {showCompareModal && (
          <div className="compare-modal-backdrop" onClick={() => setShowCompareModal(false)}>
            <div className="compare-modal glass-panel animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Grain Comparison Analysis</h3>
                <button onClick={() => setShowCompareModal(false)} className="close-btn"><X size={20} /></button>
              </div>
              
              <div className="modal-content-table">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>Specification</th>
                      {comparedProducts.map(p => (
                        <th key={p.id} style={{ padding: '1rem', borderBottom: '2px solid var(--border-color)', textAlign: 'center', color: 'var(--accent-color)' }}>{p.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Grain Length</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.length}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Elongation Factor</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.elongation}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Moisture Standard</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.moisture}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Broken Grain Allowance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.broken}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Aroma Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.aroma}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowCompareModal(false)} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
