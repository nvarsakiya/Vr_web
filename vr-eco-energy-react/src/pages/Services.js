import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - VR Eco Energy | Renewable Energy Solutions';
    
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
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive renewable energy solutions for a sustainable future</p>
        </div>
      </section>

      {/* Core Services */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title fade-in">Core Services</h2>
          <p className="section-subtitle fade-in">Integrated approach to renewable energy infrastructure development</p>
          
          <div className="services-grid">
            <div className="service-card fade-in" id="wtg">
              <div className="service-icon">🔧</div>
              <h3>WTG Projects</h3>
              <p>Designed to support the entire lifecycle of wind turbines, ensuring reliable performance and maximizing energy output. Our comprehensive WTG services include:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Site assessment and wind resource analysis</li>
                <li>Turbine selection and optimization</li>
                <li>Installation and commissioning</li>
                <li>Performance monitoring and maintenance</li>
                <li>Lifecycle management and upgrades</li>
              </ul>
            </div>
            
            <div className="service-card fade-in" id="manpower">
              <div className="service-icon">👥</div>
              <h3>Manpower & Security Services</h3>
              <p>Our Engineering Manpower Supply & Security Services are designed to provide flexible, skilled & reliable professionals including:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Certified engineers and technicians</li>
                <li>Project managers and supervisors</li>
                <li>Site security and safety personnel</li>
                <li>Specialized technical consultants</li>
                <li>24/7 support and emergency response</li>
              </ul>
            </div>
            
            <div className="service-card fade-in" id="equipment">
              <div className="service-icon">🚜</div>
              <h3>Heavy Equipment Rental</h3>
              <p>Efficiently rent our top-quality heavy equipment with streamlined service to optimize your project timelines:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Cranes and lifting equipment</li>
                <li>Excavators and earthmoving machinery</li>
                <li>Bulldozers and compactors</li>
                <li>Specialized renewable energy equipment</li>
                <li>Maintenance and operator services</li>
              </ul>
            </div>
            
            <div className="service-card fade-in" id="engineering">
              <div className="service-icon">📐</div>
              <h3>Design & Engineering</h3>
              <p>Custom engineering solutions tailored to meet specific energy needs and regulatory requirements:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Structural design and analysis</li>
                <li>Electrical system design</li>
                <li>Environmental impact assessments</li>
                <li>Regulatory compliance consulting</li>
                <li>Technical documentation and reporting</li>
              </ul>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">⚡</div>
              <h3>Energy Solutions</h3>
              <p>Complete renewable energy solutions designed to optimize performance and sustainability:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Solar and wind hybrid systems</li>
                <li>Grid integration and optimization</li>
                <li>Energy storage solutions</li>
                <li>Smart grid technologies</li>
                <li>Performance analytics and reporting</li>
              </ul>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">🛠️</div>
              <h3>Maintenance & Support</h3>
              <p>Comprehensive maintenance services to ensure optimal performance throughout the project lifecycle:</p>
              <ul style={{ marginTop: '1rem', color: '#666', lineHeight: '1.8' }}>
                <li>Preventive maintenance programs</li>
                <li>Emergency repair services</li>
                <li>Performance optimization</li>
                <li>Component replacement and upgrades</li>
                <li>Remote monitoring and diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title fade-in" style={{ color: 'white' }}>Why Choose Our Services</h2>
          <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)' }}>Excellence in execution, innovation in approach</p>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">⭐</div>
              <h3>Proven Expertise</h3>
              <p>Over 9+ years of experience in renewable energy infrastructure with successful completion of 310+ MW projects.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🔒</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensure every project meets the highest standards of safety and performance.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Streamlined processes and experienced teams enable us to deliver projects on time and within budget.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>We work closely with our clients to understand their needs and deliver customized solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title fade-in">Our Service Process</h2>
          <p className="section-subtitle fade-in">A systematic approach to delivering excellence</p>
          
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">📋</div>
              <h3>1. Consultation & Planning</h3>
              <p>We begin with a comprehensive consultation to understand your requirements and develop a detailed project plan.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">🔍</div>
              <h3>2. Site Assessment</h3>
              <p>Thorough site evaluation including feasibility studies, environmental assessments, and resource analysis.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">🏗️</div>
              <h3>3. Implementation</h3>
              <p>Professional execution with experienced teams, quality materials, and adherence to safety standards.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">✅</div>
              <h3>4. Testing & Commissioning</h3>
              <p>Comprehensive testing and commissioning to ensure optimal performance and compliance with specifications.</p>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">🔧</div>
              <h3>5. Ongoing Support</h3>
              <p>Continuous support, maintenance, and optimization services to maximize your investment return.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;