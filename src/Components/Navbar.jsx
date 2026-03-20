function Navbar() {
  return (
    <div className="nav-wrap">
      <nav className="container nav-bar" aria-label="Primary navigation">
        <a href="#top" className="nav-brand">
          RD Enterprises
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#jobs">Jobs</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
