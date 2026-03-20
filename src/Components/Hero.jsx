function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal reveal-delay-1">
          <p className="section-tag">Reliable manpower supply</p>
          <h1>Deploy skilled and unskilled workers faster, with confidence.</h1>
          <p className="hero-lead">
            We connect businesses with dependable manpower for urgent staffing, recurring workforce needs,
            and project-based deployment across multiple sectors.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button--primary">
              Get Workers
            </a>
            <a href="#services" className="button button--secondary">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support for urgent staffing</span>
            </div>
            <div className="stat-card">
              <strong>3 Types</strong>
              <span>Skilled, semi-skilled, and labor supply</span>
            </div>
            <div className="stat-card">
              <strong>Fast</strong>
              <span>Responsive deployment coordination</span>
            </div>
          </div>
        </div>

        <div className="hero-panel reveal reveal-delay-2">
          <div className="hero-panel__card">
            <span className="hero-panel__label">Why teams choose us</span>
            <ul className="hero-checklist">
              <li>Pre-screened workforce support</li>
              <li>Clear communication and quick turnaround</li>
              <li>Flexible manpower sourcing for project spikes</li>
            </ul>
          </div>
          <div className="hero-panel__accent"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
