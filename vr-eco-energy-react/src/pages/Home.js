import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="hero-content">
          <h1>Powering Tomorrow's World</h1>
          <p>With a legacy of excellence and a commitment to environmental stewardship, we are dedicated to providing reliable, efficient and clean energy solutions that meet the needs of today and tomorrow.</p>
          <Link to="/contact" className="cta-button">Get Started Today</Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title fade-in">About VR Eco Energy</h2>
          <p className="section-subtitle fade-in">Leading the transition to a sustainable energy future through innovative infrastructure solutions</p>
          
          <div className="about-content">
            <div className="about-text fade-in">
              <h3>Welcome to VR Eco Energy</h3>
              <p>We are committed to shaping the future of energy through innovative infrastructure solutions. As a leader in the energy sector, we pride ourselves on delivering state-of-the-art infrastructure that powers communities, industries, and economies.</p>
              
              <p>VR GROUP was founded by Mr. Ramshibhai Goriya in 2016, which is now a well-recognized group in Gujarat. Starting as a Civil Work & Earth Moving service provider, we have recently completed a 90 MW wind farm project under KP Green Energy Pvt. Ltd.</p>
              
              <Link to="/about" className="cta-button" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More About Us</Link>
            </div>
            
            <div className="stats fade-in">
              <div className="stat-item">
                <span className="stat-number">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">310+</span>
                <span className="stat-label">MW Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">9+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">MW Ongoing</span>
              </div>
            </div>
          </div>
          
          {/* Location Map Image */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <img src="/img/locations_completed.png" alt="VR Eco Energy Project Locations" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title fade-in">Our Core Services</h2>
          <p className="section-subtitle fade-in">Comprehensive renewable energy solutions for a sustainable future</p>
          
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">🔧</div>
              <h3>WTG Projects</h3>
              <p>Designed to support the entire lifecycle of wind turbines, ensuring reliable performance and maximizing energy output with state-of-the-art technology.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">👥</div>
              <h3>Manpower & Security Services</h3>
              <p>Our Engineering Manpower Supply & Security Services are designed to provide flexible, skilled & reliable professionals for your projects.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">🚜</div>
              <h3>Heavy Equipment Rental</h3>
              <p>Efficiently rent our top-quality heavy equipment with streamlined service to optimize your project timelines and reduce costs.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="cta-button">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title fade-in" style={{ color: 'white' }}>Why Choose VR Eco Energy</h2>
          <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)' }}>Delivering excellence through innovation, reliability, and sustainable practices</p>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>We leverage cutting-edge technology and forward-thinking approaches to develop energy infrastructure that meets today's demands.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">⚙️</div>
              <h3>Reliability & Efficiency</h3>
              <p>Our projects are designed and executed with a focus on reliability and operational efficiency, ensuring uninterrupted service.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability Commitment</h3>
              <p>We prioritize environmental responsibility and contribute to a greener, more sustainable future for generations to come.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🎯</div>
              <h3>Expertise & Experience</h3>
              <p>With 9+ years of experience and successful completion of major projects, we bring proven expertise to every challenge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Preview Section */}
      <section className="section clients">
        <div className="container">
          <h2 className="section-title fade-in">Our Trusted Partners</h2>
          <p className="section-subtitle fade-in">Working with industry leaders to deliver exceptional results</p>
          
          <div className="clients-grid">
            <div className="client-item fade-in">
              <div className="client-logo">KP</div>
              <h3>KP Green Energy</h3>
              <p>Strategic partner for 90 MW wind farm project completion</p>
            </div>
            
            <div className="client-item fade-in">
              <div className="client-logo">CLP</div>
              <h3>CLP India</h3>
              <p>Strategic partner for 90 MW wind farm project completion</p>
            </div>

            <div className="client-item fade-in">
              <div className="client-logo">BA</div>
              <h3>BA Prerna Renewables</h3>
              <p>Strategic partner for New 476 MW wind farm project in Gujarat</p>
            </div>

            <div className="client-item fade-in">
              <div className="client-logo">GP</div>
              <h3>Government Partnerships</h3>
              <p>Collaborating with government agencies for infrastructure development</p>
            </div>
            
            <div className="client-item fade-in">
              <div className="client-logo">PE</div>
              <h3>Private Enterprises</h3>
              <p>Supporting private sector renewable energy initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
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
    </div>
  );
};

export default Home;