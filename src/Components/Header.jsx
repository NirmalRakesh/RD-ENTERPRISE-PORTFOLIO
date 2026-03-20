import pic from "../Assets/rdlogo.jpg"
import logo from "../Assets/headinglogo.png"

function Header() {
  return (
    <header className="brand-bar">
      <div className="container brand-bar__inner">
        <div className="brand-mark reveal reveal-delay-1">
          <img src={pic} alt="RD Enterprises logo" className="brand-mark__seal" />
          <div className="brand-copy">
            <span className="brand-copy__eyebrow">Workforce Partner</span>
            <img src={logo} alt="RD Enterprises" className="brand-copy__wordmark" />
          </div>
        </div>
        <div className="brand-chip reveal reveal-delay-2">
          Fast hiring support for construction, logistics, warehousing, and facility operations
        </div>
      </div>
    </header>
  )
}

export default Header
