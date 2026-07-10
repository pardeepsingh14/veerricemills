import React, { useState } from 'react';
import { Cpu, ShieldCheck, Eye, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react';

export default function MillingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Cleaning & Destoning',
      machinery: 'Optical Vibratory Separator',
      icon: <RefreshCw size={24} />,
      metricName: 'Foreign Matter Removed',
      metricVal: '99.98%',
      desc: 'Paddy grains pass through pre-cleaners and vibratory destoners. High-speed aspirators extract dust, straw, stones, and weed seeds from the grain flow.'
    },
    {
      title: 'Pneumatic De-husking',
      machinery: 'Pneumatic Rubber Roller Husker',
      icon: <Cpu size={24} />,
      metricName: 'Grain Breakage Rate',
      metricVal: '< 0.5%',
      desc: 'The clean paddy is fed into rubber rollers running at differential speeds. Grains are gently de-shelled. Aspiration separates husk from brown rice.'
    },
    {
      title: 'Multi-stage Polishing',
      machinery: 'Mist Polisher & Bran Whitener',
      icon: <CheckCircle2 size={24} />,
      metricName: 'Shine & Smoothness Rating',
      metricVal: 'Grade A1+',
      desc: 'Brown rice is whitened by abrasive rollers. Water mist polishers then buff the grains, removing the silverskin (bran) to yield glossy white rice with zero residue.'
    },
    {
      title: 'Optical Sortex Camera',
      machinery: 'Buhler Sortex Trichromatic CCD Sorter',
      icon: <Eye size={24} />,
      metricName: 'Color Defect Detection',
      metricVal: '100% Precision',
      desc: 'High-definition optical cameras examine each grain in mid-air. Ultra-fast pneumatic ejector valves shoot air jets to eject chalky, yellowed, or damaged grains.'
    },
    {
      title: 'Grading & Length Sizing',
      machinery: 'Plan Sifter & Rotary Length Grader',
      icon: <BarChart2 size={24} />,
      metricName: 'Average Grain Length Uniformity',
      metricVal: '98.5%',
      desc: 'Grains flow through rotating cylinders with pockets matched to specific lengths. This segregates whole-head rice from broken grains to match export specifications.'
    },
    {
      title: 'Auto Packing & Sealing',
      machinery: 'Weighing & Form-Fill-Seal Packaging Line',
      icon: <ShieldCheck size={24} />,
      metricName: 'Bag Weight Accuracy Limit',
      metricVal: '± 2g Standard',
      desc: 'Final grains are auto-weighed, checked for metal particles, and packed. We offer vacuum/nitrogen-flushed laminated bags to preserve aroma and extend shelf-life.'
    }
  ];

  return (
    <section id="milling" className="section-padding milling-section" style={{ background: 'var(--surface-color)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">State-of-the-art Technology</span>
          <h2>Processing Built For Perfection</h2>
          <p>
            Our mill uses the latest processing infrastructure. Take a virtual walk through our advanced production lines.
          </p>
        </div>

        <div className="milling-interactive-wrap">
          {/* Timeline Navigation */}
          <div className="milling-timeline">
            {steps.map((step, idx) => (
              <button
                key={idx}
                className={`timeline-step-btn ${activeStep === idx ? 'step-active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-icon-wrap">
                  {step.icon}
                  <span className="step-number">{idx + 1}</span>
                </div>
                <span className="step-btn-label">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Details Content Box */}
          <div className="milling-details-box glass-panel animate-fade-in-up" key={activeStep}>
            <div className="milling-details-content">
              <span className="detail-machinery">{steps[activeStep].machinery}</span>
              <h3>
                Step {activeStep + 1}: {steps[activeStep].title}
              </h3>
              <p className="detail-desc">{steps[activeStep].desc}</p>
              
              <div className="detail-metric-card">
                <span className="metric-label">{steps[activeStep].metricName}</span>
                <span className="metric-value">{steps[activeStep].metricVal}</span>
                <div className="metric-bar">
                  <div className="metric-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>

            {/* Interactive Graphic */}
            <div className="milling-details-graphic" style={{ overflow: 'hidden', borderRadius: '24px', border: '1px solid var(--border-color)', aspectRatio: '4/3', width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {activeStep === 3 ? (
                <img src="/quality_lab.png" alt="Veer Optical Color Sorting Inspection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <svg viewBox="0 0 200 200" className="milling-svg" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', height: 'auto' }}>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="var(--border-color)" strokeWidth="4" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent-color)" strokeWidth="4" strokeDasharray="300" strokeDashoffset={300 - (activeStep + 1) * 50} style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
                  
                  {/* Floating particle animations representing grains */}
                  <g className="floating-grains">
                    <rect x="70" y="80" width="8" height="18" rx="4" fill="var(--text-bright)" transform="rotate(15 70 80)" opacity="0.8" />
                    <rect x="120" y="70" width="8" height="18" rx="4" fill="var(--text-bright)" transform="rotate(-30 120 70)" opacity="0.6" />
                    <rect x="95" y="110" width="8" height="18" rx="4" fill="var(--accent-color)" transform="rotate(45 95 110)" />
                    <rect x="130" y="125" width="8" height="18" rx="4" fill="var(--text-bright)" transform="rotate(-15 130 125)" opacity="0.9" />
                  </g>

                  {/* Processing visual elements based on active step */}
                  {activeStep === 0 && <circle cx="100" cy="100" r="20" fill="var(--accent-color)" opacity="0.2" />}
                  {activeStep === 1 && <line x1="60" y1="100" x2="140" y2="100" stroke="var(--accent-color)" strokeWidth="4" />}
                  {activeStep === 2 && <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" />}
                  {activeStep === 3 && <path d="M 70 100 Q 100 150 130 100" fill="none" stroke="var(--accent-color)" strokeWidth="4" />}
                  {activeStep === 4 && <rect x="80" y="90" width="40" height="20" rx="4" fill="var(--accent-color)" opacity="0.3" />}
                  {activeStep === 5 && <path d="M 90 70 L 110 70 L 120 130 L 80 130 Z" fill="var(--accent-color)" opacity="0.2" />}
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
