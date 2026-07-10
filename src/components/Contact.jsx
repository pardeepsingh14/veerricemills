import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    variety: '1121-steam',
    quantity: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.quantity) {
      alert('Please fill out the required fields.');
      return;
    }
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        variety: '1121-steam',
        quantity: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding contact-section" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Trade Desk</span>
          <h2>Request A Price Quote</h2>
          <p>
            Ready to import? Connect with our export sales division for pricing, phytosanitary specs, and CIF/FOB container freight calculations.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'stretch' }}>
          {/* Contact details */}
          <div className="contact-details-wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.8rem' }}>Get In Touch With <span className="gradient-accent-text">Our Millers</span></h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Our representatives respond to global business inquiries within 12 hours. We coordinate closely with importers to supply tailored specifications.
              </p>

              <div className="contact-channels" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--surface-hover)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-color)' }}><Phone size={20} /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call / WhatsApp Sales</span>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>+91 98765 43210 / +91 99988 77766</h4>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--surface-hover)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-color)' }}><Mail size={20} /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Inquiries</span>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>exports@veerricemills.com / info@veerricemills.com</h4>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--surface-hover)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-color)' }}><MapPin size={20} /></div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Milling Plant & HQ Address</span>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-bright)' }}>NH-44, GT Road, Near Grain Market, Karnal - 132001, Haryana, India</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality assurance seal mock */}
            <div className="qa-badge-panel glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>✓ 100% Export Protection</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We facilitate third-party inspection (SGS/Intertek) at the port of loading for peace of mind.</p>
            </div>
          </div>

          {/* Inquiry form panel */}
          <div className="contact-form-card glass-panel" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            {submitted ? (
              <div className="submit-success-state" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', minHeight: '350px', gap: '1.5rem' }}>
                <CheckCircle2 size={64} color="#10b981" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-bright)' }}>Enquiry Submitted Successfully</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '350px' }}>
                  Thank you for contacting Veer Rice Mills. An export manager has been assigned to your query and will contact you shortly via email.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Send Commercial Inquiry</h3>
                
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Your Name <span style={{ color: 'red' }}>*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Email Address <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Grain Importers Ltd."
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Rice Variety</label>
                    <select 
                      name="variety"
                      value={formData.variety}
                      onChange={handleChange}
                      className="form-input"
                      style={{ background: 'var(--surface-color)' }}
                    >
                      <option value="1121-steam">1121 Steam Basmati</option>
                      <option value="trad-basmati">Traditional Raw Basmati</option>
                      <option value="1509-sella">1509 Golden Sella</option>
                      <option value="pr11-non">PR11 Non-Basmati</option>
                      <option value="ir64-broken">IR64 5% Broken</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Expected Volume <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="text" 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 50 Metric Tons"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-bright)' }}>Enquiry Message</label>
                  <textarea 
                    id="enquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter detailed packaging specifications or custom requirements..."
                    rows="4"
                    className="form-input"
                    style={{ resize: 'none', fontFamily: 'inherit' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-accent" 
                  style={{ width: '100%', marginTop: '0.5rem', gap: '0.75rem' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin-slow" />
                      <span>Transmitting Query...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Official Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
