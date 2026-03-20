import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Subscribe from "./Components/Subscribe"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="site-shell">
      <div className="top-fixed-shell">
        <Header />
        <Navbar />
      </div>

      <main className="site-main">
        <Hero />
        <Services />
        <Subscribe />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2023 RD Enterprises. Trusted manpower solutions across industries.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
