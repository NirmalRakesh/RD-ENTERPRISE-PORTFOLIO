import { useState } from "react"

const services = [
  {
    title: "Skilled Workers",
    text: "Experienced manpower for technical, operational, and productivity-focused roles.",
  },
  {
    title: "Semi-Skilled Teams",
    text: "Reliable support staff for structured processes, site work, and day-to-day execution.",
  },
  {
    title: "Unskilled Labor",
    text: "Scalable labor deployment for warehousing, loading, housekeeping, and field support.",
  },
]

const jobs = [
  "Supervisor",
  "Data Executive",
  "Helper",
  "SKILLED",
  "SEMI SKILLED",
  "UNSKILLED",
]

// Update this date and the jobs list every week.
const lastUpdated = "19 Mar 2026"
// const recipientEmail = "rdenterprise9848@gmail.com"
const recipientEmail = "podisinangunirmal@gmail.com"

function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")
  const [application, setApplication] = useState({
    fullName: "",
    phone: "",
    email: "",
    experience: "",
    // location: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const openForm = (jobTitle) => {
    setSelectedJob(jobTitle)
    setSubmitMessage("")
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setApplication((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Job Application - ${selectedJob}`,
          applied_role: selectedJob,
          full_name: application.fullName,
          phone: application.phone,
          email: application.email,
          experience: application.experience,
          _template: "table",
        }),
      })

      if (!response.ok) {
        throw new Error("Email send request failed")
      }

      setSubmitMessage("Application submitted successfully.")
      setApplication({
        fullName: "",
        phone: "",
        email: "",
        experience: "",
      })
      setTimeout(() => {
        closeForm()
      }, 900)
    } catch (error) {
      setSubmitMessage("Unable to send now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="services-block">
      <section id="services" className="section">
        <div className="container">
          <div className="section-heading reveal reveal-delay-1">
            <p className="section-tag">Services</p>
            <h2>Workforce solutions designed for operational speed.</h2>
            <p>
              Whether you need a few workers immediately or a steady pipeline of manpower, we help teams
              stay staffed without losing momentum.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="info-card reveal reveal-delay-2">
                <span className="info-card__index">0{services.indexOf(service) + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="section section--muted">
        <div className="container">
          <div className="section-heading reveal reveal-delay-1">
            <p className="section-tag">Open roles</p>
            <h2>Latest job opportunities from our active requirements.</h2>
            <p>Current openings are updated every week based on partner business demand.</p>
          </div>

          <div className="jobs-notice reveal reveal-delay-2">
            <div>
              <p className="jobs-notice__label">Job Notifications</p>
              <h3>Weekly job update is live</h3>
              <p>New requirements are posted weekly. Last update: {lastUpdated}.</p>
            </div>
            <a href="#contact" className="button button--primary button--small">
              Get Notification
            </a>
          </div>

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <article key={job} className="job-card reveal reveal-delay-2">
                <span className="job-card__badge">Opening {index + 1}</span>
                <h3>{job}</h3>
                <p>Quick application support available for eligible candidates.</p>
                <button
                  type="button"
                  className="button button--primary button--small"
                  onClick={() => openForm(job)}
                >
                  Apply Now
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div className="job-modal" role="dialog" aria-modal="true" aria-labelledby="job-apply-title">
          <div className="job-modal__backdrop" onClick={closeForm}></div>
          <div className="job-modal__content">
            <button
              type="button"
              className="job-modal__close"
              aria-label="Close application form"
              onClick={closeForm}
            >
              x
            </button>
            <p className="section-tag">Job Application</p>
            <h3 id="job-apply-title">Apply for: {selectedJob}</h3>

            <form className="job-apply-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={application.fullName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={application.phone}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={application.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="experience">Experience</label>
              <input
                id="experience"
                name="experience"
                type="text"
                placeholder="Example: 2 years in warehouse operations"
                value={application.experience}
                onChange={handleInputChange}
                required
              />

              {/* <label htmlFor="skills">ROLE</label>
              <Selection>
                <Option>GUNNER</Option>
                <Option>BRAZZER</Option>
                <Option>MOLDING MACHINE OPERATOR</Option>
                <input type="text" placeholder="Enter custom role"/>
              </Selection> */}

              {/* <label htmlFor="location">Current Location</label>
              <input
                id="location"
                name="location"
                type="text"
                value={application.location}
                onChange={handleInputChange}
                required
              /> */}

              {submitMessage && <p className="job-apply-form__status">{submitMessage}</p>}

              <button type="submit" className="button button--primary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
