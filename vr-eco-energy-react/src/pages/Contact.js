import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - VR Eco Energy | Get In Touch';
    
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form Data:', formData);
      showNotification('Message sent successfully! We will get back to you within 24 hours.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const showNotification = (message, type) => {
    // Simple notification implementation
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#2E7D32' : '#d32f2f'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our renewable energy experts</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info fade-in">
              <h3>Get In Touch</h3>
              <p>Ready to start your renewable energy project? Contact our team of experts for consultation and support.</p>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Office Address</h4>
                  <p>O-5, Kanaknidhi Complex, Opp. Gandhi Smruti Hall, Nanpura, Surat, Gujarat, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 990 428 9999</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@vr-eco.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form fade-in">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Our Office Location</h2>
          <p className="section-subtitle fade-in">Visit us at our headquarters in Surat, Gujarat</p>
          
          <div className="location-content fade-in">
            <div className="location-info">
              <h3>VR Eco Energy Pvt Ltd</h3>
              <p><strong>Address:</strong> O-5, Kanaknidhi Complex, Opp. Gandhi Smruti Hall, Nanpura, Surat, Gujarat, India</p>
              <p><strong>Phone:</strong> +91 990 428 9999</p>
              <p><strong>Email:</strong> info@vr-eco.com</p>
              <p><strong>Business Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6728949474987!2d72.81449878289713!3d21.185798841394174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzA4LjkiTiA3MsKwNDgnNTIuMiJF!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VR Eco Energy Office Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title fade-in" style={{ color: 'white' }}>Why Partner With Us</h2>
          <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)' }}>Experience the VR Eco Energy difference</p>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Quick Response</h3>
              <p>Our team responds to all inquiries within 24 hours, ensuring your project stays on track.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🎯</div>
              <h3>Expert Consultation</h3>
              <p>Get personalized advice from our renewable energy experts with 9+ years of industry experience.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">💼</div>
              <h3>Custom Solutions</h3>
              <p>We tailor our services to meet your specific needs and project requirements.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🤝</div>
              <h3>Long-term Partnership</h3>
              <p>Build lasting relationships with a trusted partner committed to your success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;