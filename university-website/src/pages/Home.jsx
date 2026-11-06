import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { image } from "../lib/image";

const stats = [
  { value: "24+", label: "Degree Programs" },
  { value: "12,500+", label: "Students Enrolled" },
  { value: "480+", label: "Expert Faculty" },
  { value: "94%", label: "Employment Rate" },
];

const features = [
  {
    icon: "bi-cpu",
    title: "Industry-Ready Curriculum",
    text: "Every program is co-designed with employers so you learn the tools and practices teams actually use.",
  },
  {
    icon: "bi-people",
    title: "Small, Focused Classes",
    text: "A 1:18 faculty ratio means real mentorship, not crowded lecture halls.",
  },
  {
    icon: "bi-briefcase",
    title: "Guaranteed Internships",
    text: "120+ partner companies offer placements, paid internships and graduate roles.",
  },
  {
    icon: "bi-globe2",
    title: "Global Opportunities",
    text: "Exchange semesters and research collaborations across 30 partner universities.",
  },
];

const admissionSteps = [
  "Create your student account and choose a program.",
  "Submit your academic transcripts and identification documents.",
  "Complete a short online aptitude assessment.",
  "Attend a virtual or on-campus interview with faculty.",
  "Receive your offer letter and confirm enrolment.",
];

const testimonials = [
  {
    name: "Aarav Sharma",
    program: "Software Engineering, Year 4",
    quote:
      "The studio projects felt like real work. I shipped production code during my internship because of what I learned here.",
  },
  {
    name: "Priya Menon",
    program: "Data Science, Year 3",
    quote:
      "The faculty treat you like a colleague. I published my first research paper in my second year.",
  },
  {
    name: "Omar Khan",
    program: "Cyber Security, Alumni 2024",
    quote:
      "The cyber range gave me hands-on experience that interviewers specifically asked about. I had three offers before graduating.",
  },
];

const Home = () => {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="tu-hero py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="tu-eyebrow text-warning mb-3">
                Welcome to Tech University
              </p>
              <h1 className="display-4 fw-bold lh-sm mb-3">
                Build the future with technology that matters.
              </h1>
              <p className="tu-hero-sub fs-5 mb-4">
                Join a community of makers, researchers and problem-solvers.
                Study software engineering, data science or cyber security and
                graduate ready for the roles shaping tomorrow.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/register" className="btn btn-primary btn-lg px-4">
                  Apply Now
                </Link>
                <Link
                  to="/courses"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-link btn-lg text-white px-0 text-decoration-none"
                >
                  Visit Campus <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                className="tu-hero-img w-100"
                src={image(
                  "aerial view of a modern green university campus with students walking and contemporary architecture",
                  "landscape_16_9"
                )}
                alt="Tech University campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="tu-section py-5 border-bottom">
        <div className="container">
          <div className="row text-center g-4">
            {stats.map((stat) => (
              <div className="col-6 col-lg-3" key={stat.label}>
                <div className="tu-stat-value">{stat.value}</div>
                <p className="text-secondary fw-semibold mb-0 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Tech University ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Why Choose Us</p>
            <h2 className="fw-bold display-6 mb-3">Why Tech University</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 680 }}>
              We combine academic rigour with practical, hands-on learning so
              our graduates are ready from day one.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature) => (
              <div className="col-md-6 col-lg-3" key={feature.title}>
                <div className="tu-card h-100 p-4 bg-white">
                  <span className="tu-icon-tile mb-3">
                    <i className={`bi ${feature.icon}`}></i>
                  </span>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-secondary mb-0">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Top Programs ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
            <div>
              <p className="tu-eyebrow mb-2">Our Programs</p>
              <h2 className="fw-bold display-6 mb-0">Top Programs</h2>
            </div>
            <Link to="/courses" className="btn btn-outline-primary">
              View all courses <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-6 col-lg-4" key={course.id}>
                <div className="tu-card h-100 bg-white d-flex flex-column">
                  <img
                    src={course.image}
                    className="w-100"
                    style={{ height: 200, objectFit: "cover" }}
                    alt={course.title}
                    loading="lazy"
                  />
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <span className="badge text-bg-light align-self-start mb-2">
                      {course.duration}
                    </span>
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="text-secondary flex-grow-1">
                      {course.summary}
                    </p>
                    <Link
                      to="/courses"
                      className="btn btn-primary mt-2 align-self-start"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Admissions Steps ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <p className="tu-eyebrow mb-2">How to Join</p>
              <h2 className="fw-bold display-6 mb-3">Admissions Steps</h2>
              <p className="text-secondary mb-4">
                Applying takes about twenty minutes. Our admissions team
                supports you at every step of the way.
              </p>
              <Link to="/register" className="btn btn-primary btn-lg">
                Start your application
              </Link>
            </div>

            <div className="col-lg-7">
              <ol className="list-group list-group-numbered">
                {admissionSteps.map((step) => (
                  <li
                    className="list-group-item d-flex align-items-start py-3"
                    key={step}
                  >
                    <span className="ms-2">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Student Voices</p>
            <h2 className="fw-bold display-6 mb-0">Testimonials</h2>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-md-6 col-lg-4" key={testimonial.name}>
                <div className="tu-card h-100 p-4 bg-white">
                  <div className="text-warning mb-3">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="fst-italic">“{testimonial.quote}”</p>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <span className="tu-icon-tile">
                      <i className="bi bi-person"></i>
                    </span>
                    <div>
                      <div className="fw-bold">{testimonial.name}</div>
                      <small className="text-secondary">
                        {testimonial.program}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="tu-hero py-5">
        <div className="container text-center py-3">
          <h2 className="fw-bold display-6 mb-3">
            Ready to start your journey?
          </h2>
          <p className="tu-hero-sub mb-4">
            Applications for the Fall 2026 intake are now open.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/register" className="btn btn-primary btn-lg px-4">
              Apply Now
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
