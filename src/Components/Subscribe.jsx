function Subscribe() {
  return (
    <section className="section subscribe-section">
      <div className="container">
        <div className="subscribe-panel reveal reveal-delay-1">
          <div>
            <p className="section-tag">Stay updated</p>
            <h2>Get job and hiring updates directly in your inbox.</h2>
            <p>
              Join our update list to hear about manpower requirements, urgent openings, and deployment
              availability.
            </p>
          </div>

          <form className="subscribe-form">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input id="email" type="email" placeholder="Enter your email address" />
            <button type="submit" className="button button--primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
