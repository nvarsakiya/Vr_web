import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - VR Eco Energy | Renewable Energy Leaders in Gujarat';
    
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
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About VR Eco Energy</h1>
          <p>Pioneering sustainable energy solutions with excellence and innovation</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="content-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text fade-in">
              <h2>Welcome to VR Eco Energy</h2>
              <p>We are committed to shaping the future of energy through innovative infrastructure solutions. As a leader in the energy sector, we pride ourselves on delivering state-of-the-art infrastructure that powers communities, industries, and economies.</p>
              
              <p>Our team is composed of highly skilled professionals with extensive experience in energy infrastructure. From engineers and project managers to sustainability experts and support staff, we bring a wealth of knowledge and expertise to every project.</p>
              
              <h3>Our Journey</h3>
              <p>VR GROUP was founded by <strong>Mr. Ramshibhai Goriya</strong> in 2016, which is now a well-recognized group in Gujarat. It started business operations in 2015 as a Civil Work & Earth Moving service provider with owned & hired fleet of vehicles. We recently completed a significant 90 MW project of wind farm under KP Green Energy Pvt. Ltd.</p>
              
              <p>During our forward journey, we have virtually surpassed all expectations in renewable (Solar, Wind & Hybrid) power sectors over the last more than 9+ years. The Company has completed more than 3+ years of successful operations, all contributing to the fast and robust growth of the group.</p>
              
              <p>In a short time period, the company has achieved phenomenal growth as a result of diversification into fabrication and galvanizing, renewable energy sector (Solar, Wind & Hybrid). VRECO ENERGY has been significantly contributing to India's green energy transition. Our commitment towards green energy transition has become even stronger.</p>
            </div>
            
            <div className="stats fade-in">
              <div className="stat-item">
                <span className="stat-number">2016</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">90</span>
                <span className="stat-label">MW Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Our Mission & Vision</h2>
          <p className="section-subtitle fade-in">Driving progress and creating lasting value for a sustainable future</p>
          
          <div className="mission-vision">
            <div className="mv-card fade-in">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To lead the transition to a sustainable energy future by developing, operating, and optimizing innovative energy infrastructure solutions. We are dedicated to delivering reliable, efficient, and environmentally responsible energy systems that meet the evolving needs of our customers and communities.</p>
            </div>
            
            <div className="mv-card fade-in">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>By embracing innovation and sustainability, we aim to shape the energy landscape and inspire positive change for generations to come. We envision a world powered by clean, renewable energy that benefits all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title fade-in" style={{ color: 'white' }}>Our Core Values & Commitment</h2>
          <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)' }}>The principles that guide our every decision and action</p>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>We leverage cutting-edge technology and forward-thinking approaches to develop energy infrastructure that meets the demands of today and tomorrow.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">⚙️</div>
              <h3>Reliability & Efficiency</h3>
              <p>Our projects are designed and executed with a focus on reliability and operational efficiency, ensuring uninterrupted service and optimal performance.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are dedicated to advancing sustainable energy practices. Our solutions prioritize environmental responsibility and contribute to a greener future.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🤝</div>
              <h3>Customer-Centric Approach</h3>
              <p>Working in partnership with our clients to deliver exceptional outcomes through the application of design, consultancy, engineering, and project management services.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🔗</div>
              <h3>Strategic Partnerships</h3>
              <p>We believe in building strong, long-term relationships with our partners, clients, and stakeholders to achieve mutual success and growth.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">📈</div>
              <h3>Long-Term Value</h3>
              <p>Our commitment extends beyond project completion. We focus on creating sustainable value that benefits all stakeholders for years to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="content-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text fade-in">
              <h2>Diversity & Inclusion</h2>
              <p>"We believe that by working together, diverse people with different experiences conceive some of the most innovative ideas. Diversity hones our competitive edge and contributes to our company's strength."</p>
              
              <p>VRECO ENERGY actively promotes inclusiveness across the workplace, creating an environment where each individual has equal opportunity to achieve his or her full potential, where human differences are valued, and where employees feel respected and empowered in the decisions that affect them.</p>
              
              <p>A diverse and skilled workforce is essential to our success. We are committed to fostering an inclusive culture that celebrates different perspectives, backgrounds, and experiences, leading to better decision-making and innovation.</p>
            </div>
            
            <div className="fade-in">
              <div className="mv-card">
                <div className="mv-icon">👥</div>
                <h3>Our Team Philosophy</h3>
                <p>Excellence through diversity, innovation through collaboration, and success through mutual respect and shared values.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Excellence */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Quality and Excellence in Execution</h2>
          <p className="section-subtitle fade-in">Our unwavering commitment to delivering exceptional results</p>
          
          <div className="about-content">
            <div className="about-text fade-in">
              <p>At VR Eco Energy, we specialize in creating robust, reliable, and sustainable infrastructure to support the full lifecycle of energy projects, including wind turbine generators (WTGs) and other energy infrastructure.</p>
              
              <p>We are dedicated to achieving client satisfaction by delivering projects that not only meet but exceed expectations, building enduring relationships through our commitment to excellence.</p>
              
              <p>Our quality assurance processes ensure that every project adheres to the highest standards of safety, efficiency, and environmental responsibility.</p>
            </div>
            
            <div className="stats fade-in">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Assurance</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Safety Incidents</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;