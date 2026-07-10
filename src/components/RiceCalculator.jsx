import React, { useState, useEffect } from 'react';
import { Scale, Package, Layers, Info, Send } from 'lucide-react';

export default function RiceCalculator() {
  const [containerType, setContainerType] = useState('20fcl'); // 20fcl, 40fcl
  const [bagSize, setBagSize] = useState('25'); // 5, 10, 20, 25, 50
  const [stuffing, setStuffing] = useState('loose'); // loose, palletized
  
  const [results, setResults] = useState({
    maxWeightKg: 25000,
    totalBags: 1000,
    actualWeightMt: 25.0,
    palletsCount: 0,
    efficiency: 100,
  });

  useEffect(() => {
    // 20ft FCL loose max is approx 25,000kg. Palletized max is approx 21,000kg.
    // 40ft FCL loose max is approx 27,000kg (due to road weight limits). Palletized is approx 24,000kg.
    let maxWeight = 25000;
    if (containerType === '20fcl') {
      maxWeight = stuffing === 'loose' ? 25000 : 21000;
    } else {
      maxWeight = stuffing === 'loose' ? 27000 : 24000;
    }

    const size = parseInt(bagSize, 10);
    const totalBags = Math.floor(maxWeight / size);
    const actualWeightKg = totalBags * size;
    const actualWeightMt = actualWeightKg / 1000;
    
    // Pallet counts: standard pallets hold ~1,000kg.
    // 20ft fits 10 standard pallets, 40ft fits 20 standard pallets.
    let palletsCount = 0;
    if (stuffing === 'palletized') {
      palletsCount = containerType === '20fcl' ? 10 : 20;
    }

    const efficiency = Math.round((actualWeightKg / maxWeight) * 100);

    setResults({
      maxWeightKg: maxWeight,
      totalBags,
      actualWeightMt,
      palletsCount,
      efficiency,
    });
  }, [containerType, bagSize, stuffing]);

  const handleInquiryAutoFill = () => {
    const message = `Dear Veer Rice Mills, I would like to inquire about importing rice with the following configuration: Container: ${containerType === '20fcl' ? '20ft FCL' : '40ft FCL'}, Bag Size: ${bagSize}kg, Stuffing Method: ${stuffing}. Total Estimated bags: ${results.totalBags} bags. Please send me a price quote.`;
    
    const element = document.getElementById('contact');
    if (element) {
      const textarea = document.getElementById('enquiry-message');
      if (textarea) {
        textarea.value = message;
      }
      
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="calculator" className="section-padding calculator-section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Import Planner</span>
          <h2>Bulk Export Calculator</h2>
          <p>
            Configure your container capacity, packaging requirements, and packing style to calculate volume metrics instantly.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          {/* Inputs Panel */}
          <div className="calc-inputs-card glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem' }}>Configure Shipping Specs</h3>
            
            {/* Container Type selector */}
            <div className="input-group">
              <label className="input-label">Container Type</label>
              <div className="grid-2" style={{ gap: '1rem', marginTop: '0.5rem' }}>
                <button 
                  className={`btn ${containerType === '20fcl' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setContainerType('20fcl')}
                  style={{ padding: '0.75rem', fontSize: '0.85rem' }}
                >
                  20ft FCL (Standard Weight)
                </button>
                <button 
                  className={`btn ${containerType === '40fcl' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setContainerType('40fcl')}
                  style={{ padding: '0.75rem', fontSize: '0.85rem' }}
                >
                  40ft FCL (Volume Weight)
                </button>
              </div>
            </div>

            {/* Bag Packaging selector */}
            <div className="input-group">
              <label className="input-label">Bag Weight Packaging Size</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                {['5', '10', '20', '25', '50'].map(size => (
                  <button 
                    key={size}
                    className={`btn ${bagSize === size ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setBagSize(size)}
                    style={{ padding: '0.5rem 0', fontSize: '0.85rem' }}
                  >
                    {size} kg
                  </button>
                ))}
              </div>
            </div>

            {/* Stuffing selector */}
            <div className="input-group">
              <label className="input-label">Stuffing / Packaging Style</label>
              <div className="grid-2" style={{ gap: '1rem', marginTop: '0.5rem' }}>
                <button 
                  className={`btn ${stuffing === 'loose' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setStuffing('loose')}
                  style={{ padding: '0.75rem', fontSize: '0.85rem' }}
                >
                  Loose Stuffing (Max volume)
                </button>
                <button 
                  className={`btn ${stuffing === 'palletized' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setStuffing('palletized')}
                  style={{ padding: '0.75rem', fontSize: '0.85rem' }}
                >
                  Palletized (Easy unloading)
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--surface-hover)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <Info size={20} color="var(--accent-color)" style={{ flexShrink: 0 }} />
              <span>Palletization limits the total container payload capacity due to clearance requirements, but guarantees faster mechanised unloading.</span>
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="calc-results-card glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: 'linear-gradient(135deg, var(--surface-glass), rgba(20, 60, 35, 0.1))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>Estimated Capacity Output</h3>
              
              <div className="results-metrics-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="metric-icon" style={{ background: 'var(--surface-color)', padding: '0.75rem', borderRadius: '12px', color: 'var(--accent-color)' }}><Package size={20} /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Bags Needed</span>
                    <h4 style={{ fontSize: '1.6rem', color: 'var(--text-bright)', fontFamily: 'var(--font-heading)' }}>{results.totalBags.toLocaleString()} Bags</h4>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="metric-icon" style={{ background: 'var(--surface-color)', padding: '0.75rem', borderRadius: '12px', color: 'var(--accent-color)' }}><Scale size={20} /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Payload Weight</span>
                    <h4 style={{ fontSize: '1.6rem', color: 'var(--text-bright)', fontFamily: 'var(--font-heading)' }}>{results.actualWeightMt.toFixed(2)} Metric Tons</h4>
                  </div>
                </div>

                {stuffing === 'palletized' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="metric-icon" style={{ background: 'var(--surface-color)', padding: '0.75rem', borderRadius: '12px', color: 'var(--accent-color)' }}><Layers size={20} /></div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pallets Count</span>
                      <h4 style={{ fontSize: '1.6rem', color: 'var(--text-bright)', fontFamily: 'var(--font-heading)' }}>{results.palletsCount} Standard Pallets</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Container Utilization Efficiency</span>
                <strong style={{ color: 'var(--accent-color)' }}>{results.efficiency}%</strong>
              </div>
              <div className="efficiency-bar" style={{ width: '100%', height: '6px', background: 'var(--border-color)', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <div style={{ width: `${results.efficiency}%`, height: '100%', background: 'var(--accent-color)', transition: 'width 0.3s' }}></div>
              </div>

              <button onClick={handleInquiryAutoFill} className="btn btn-accent" style={{ width: '100%' }}>
                <span>Send Inquiry With These Specs</span>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
