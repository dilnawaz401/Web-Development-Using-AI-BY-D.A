import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { image } from "../lib/image";

const campusInfo = [
  {
    icon: "bi-geo-alt",
    label: "Address",
    lines: ["12 Innovation Drive", "Guindy, Chennai 600032", "Tamil Nadu, India"],
  },
  {
    icon: "bi-telephone",
    label: "Phone",
    lines: ["+91 44 4000 1234", "+91 44 4000 5678 (Admissions)"],
  },
  {
    icon: "bi-envelope",
    label: "Email",
    lines: ["hello@techuniversity.edu", "admissions@techuniversity.edu"],
  },
  {
    icon: "bi-clock",
    label: "Office Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"],
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Questions about admissions, programs or campus visits? Our team is happy to help."
      />

      <section className="tu-section">
        <div className="container">
          <div className="row g-5">
            {/* ---------- Contact form ---------- */}
            <div className="col-lg-7">
              <div className="tu-card bg-white p-4 p-lg-5">
                <h3 className="fw-bold mb-4">Send us a message</h3>

                {submitted && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    Thank you! Your message has been received. We usually reply
                    within one working day.
                  </div>
                )}

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-control"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ---------- Campus info ---------- */}
            <div className="col-lg-5">
              <h3 className="fw-bold mb-4">Campus Information</h3>
              <div className="d-grid gap-3">
                {campusInfo.map((info) => (
                  <div
                    className="d-flex gap-3 tu-card bg-white p-3"
                    key={info.label}
                  >
                    <span className="tu-icon-tile flex-shrink-0">
                      <i className={`bi ${info.icon}`}></i>
                    </span>
                    <div>
                      <h6 className="fw-bold mb-1">{info.label}</h6>
                      {info.lines.map((line) => (
                        <p className="text-secondary mb-0 small" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <h3 className="fw-bold mb-4">Find Us on the Map</h3>
          <figure className="mb-0">
            <div className="tu-card overflow-hidden">
              <img
                className="w-100"
                style={{ height: 380, objectFit: "cover" }}
                src={image(
                  "stylised illustrated city map showing a university campus location marker in green tones",
                  "landscape_16_9"
                )}
                alt="Map showing the location of Tech University"
                loading="lazy"
              />
            </div>
            <figcaption className="text-secondary small mt-3">
              Tech University campus — 12 Innovation Drive, Guindy, Chennai.
              Visitor parking is available at Gate 2.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Contact;
