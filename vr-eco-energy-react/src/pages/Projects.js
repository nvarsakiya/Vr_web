import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    document.title = 'Our Projects - VR Eco Energy | Renewable Energy Portfolio';
    
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

  const projects = [
    {
      id: 1,
      title: "KP Green Energy Wind Farm",
      description: "90 MW wind farm project completed successfully",
      category: "wind",
      status: "Completed",
      capacity: "90 MW",
      location: "Gujarat, India"
    },
    {
      id: 2,
      title: "CLP India Partnership",
      description: "Strategic partnership for renewable energy development",
      category: "partnership",
      status: "Ongoing",
      capacity: "150 MW",
      location: "Gujarat, India"
    },
    {
      id: 3,
      title: "BA Prerna Renewables",
      description: "476 MW wind farm project in development",
      category: "wind",
      status: "In Progress",
      capacity: "476 MW",
      location: "Gujarat, India"
    }
  ];

  const galleryImages = [
    { src: "/img/site_pics/wtg_erection.jpg", title: "WTG Erection", category: "construction" },
    { src: "/img/site_pics/wtg_foundation.jpg", title: "WTG Foundation", category: "foundation" },
    { src: "/img/site_pics/heavy_machine_1.jpg", title: "Heavy Machinery", category: "equipment" },
    { src: "/img/site_pics/electrical_line.jpg", title: "Electrical Lines", category: "electrical" },
    { src: "/img/site_pics/wtg_excavation.jpg", title: "Site Excavation", category: "foundation" },
    { src: "/img/site_pics/wtg_boom_assembly.jpg", title: "Boom Assembly", category: "construction" },
    { src: "/img/site_pics/wtg_foundation_civil.jpg", title: "Foundation Civil Work", category: "foundation" },
    { src: "/img/site_pics/wtg_lattice_assembly.jpg", title: "Lattice Assembly", category: "construction" },
    { src: "/img/site_pics/wtg_stub_assembly.jpg", title: "Stub Assembly", category: "construction" },
    { src: "/img/site_pics/wtg_pathway.jpg", title: "Site Pathway", category: "infrastructure" },
    { src: "/img/site_pics/heavy_machine_2.jpg", title: "Construction Equipment", category: "equipment" },
    { src: "/img/site_pics/electical_line_1.jpg", title: "Power Lines", category: "electrical" }
  ];

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };

  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedFilter);

  const displayedImages = showAllImages ? filteredImages : filteredImages.slice(0, 9);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Showcasing our commitment to renewable energy excellence</p>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title fade-in">Project Overview</h2>
          <p className="section-subtitle fade-in">Our track record of successful renewable energy implementations</p>
          
          <div className="stats fade-in">
            <div className="stat-item">
              <span className="stat-number">310+</span>
              <span className="stat-label">MW Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">MW Ongoing</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <p className="section-subtitle fade-in">Major renewable energy initiatives driving sustainable development</p>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card fade-in">
                <div className="project-image">
                  <span style={{ fontSize: '3rem' }}>⚡</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div style={{ marginTop: '1rem' }}>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Capacity:</strong> {project.capacity}</p>
                    <p><strong>Location:</strong> {project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title fade-in">Project Gallery</h2>
          <p className="section-subtitle fade-in">Visual documentation of our renewable energy projects</p>
          
          {/* Gallery Filters */}
          <div className="gallery-filters fade-in">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => filterProjects('all')}
            >
              All Images
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'construction' ? 'active' : ''}`}
              onClick={() => filterProjects('construction')}
            >
              Construction
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'foundation' ? 'active' : ''}`}
              onClick={() => filterProjects('foundation')}
            >
              Foundation
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'equipment' ? 'active' : ''}`}
              onClick={() => filterProjects('equipment')}
            >
              Equipment
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'electrical' ? 'active' : ''}`}
              onClick={() => filterProjects('electrical')}
            >
              Electrical
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'infrastructure' ? 'active' : ''}`}
              onClick={() => filterProjects('infrastructure')}
            >
              Infrastructure
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid fade-in">
            {displayedImages.map((image, index) => (
              <div key={index} className="gallery-item" data-category={image.category}>
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                  <p>VR Eco Energy Project</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          {filteredImages.length > 9 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="cta-button"
                onClick={() => setShowAllImages(!showAllImages)}
              >
                {showAllImages ? 'View Less Images' : 'View More Images'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Capabilities */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title fade-in" style={{ color: 'white' }}>Our Project Capabilities</h2>
          <p className="section-subtitle fade-in" style={{ color: 'rgba(255,255,255,0.9)' }}>Comprehensive expertise across all phases of renewable energy projects</p>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">🏗️</div>
              <h3>Construction Excellence</h3>
              <p>Advanced construction techniques and experienced teams ensure quality execution of complex renewable energy projects.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🔧</div>
              <h3>Technical Expertise</h3>
              <p>Deep technical knowledge in wind turbine installation, electrical systems, and renewable energy infrastructure.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">📊</div>
              <h3>Project Management</h3>
              <p>Proven project management methodologies ensuring on-time delivery and budget compliance for all projects.</p>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">🌍</div>
              <h3>Environmental Focus</h3>
              <p>All projects are executed with strong environmental consciousness and sustainable development principles.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;