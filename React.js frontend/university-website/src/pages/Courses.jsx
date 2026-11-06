import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CurriculumAccordion from "../components/CurriculumAccordion";
import { courses } from "../data/courses";

const quickFacts = [
  { icon: "bi-mortarboard", label: "Programs", value: courses.length, hint: "Undergraduate" },
  { icon: "bi-clock-history", label: "Duration", value: "4", hint: "Years each" },
  { icon: "bi-award", label: "Credits", value: "160", hint: "Per degree" },
  { icon: "bi-people", label: "Class Size", value: "25", hint: "Max students" },
];

const Courses = () => {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Our Courses"
        subtitle="Three industry-designed undergraduate programs. Explore the structure, modules and careers each one unlocks."
      />

      {/* ---------- Quick facts ---------- */}
      <section className="container" style={{ marginTop: "-3rem" }}>
        <div className="row g-3">
          {quickFacts.map((fact) => (
            <div className="col-6 col-lg-3" key={fact.label}>
              <div className="tu-card tu-hover-lift bg-white p-3 p-lg-4 h-100 d-flex align-items-center gap-3">
                <span className="tu-icon-tile tu-icon-tile--green flex-shrink-0">
                  <i className={`bi ${fact.icon}`}></i>
                </span>
                <div className="tu-min-0">
                  <div className="fs-4 fw-bold lh-1">{fact.value}</div>
                  <div className="fw-semibold small">{fact.label}</div>
                  <small className="text-secondary">{fact.hint}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Program cards ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Choose your path</p>
            <h2 className="fw-bold mb-2">Find the program built for you</h2>
            <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 640 }}>
              Every program blends classroom theory with studio practice, a
              mentored capstone and a paid internship.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              {courses.map((course) => (
                <a
                  key={course.id}
                  href={`#${course.id}`}
                  className={`tu-badge-soft tu-badge-soft--${course.tone} text-decoration-none`}
                >
                  <i className={`bi ${course.icon} me-1`}></i>
                  {course.title}
                </a>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-6 col-lg-4" key={course.id}>
                <article className="tu-card h-100 bg-white d-flex flex-column">
                  <div className="position-relative">
                    <img
                      src={course.image}
                      className="w-100"
                      style={{ height: 210, objectFit: "cover" }}
                      alt={course.title}
                      loading="lazy"
                    />
                    <span
                      className={`tu-badge-soft tu-badge-soft--${course.tone} position-absolute`}
                      style={{ top: 12, left: 12 }}
                    >
                      <i className={`bi ${course.icon} me-1`}></i>
                      {course.level}
                    </span>
                    <span
                      className="tu-badge-soft tu-badge-soft--green position-absolute"
                      style={{ top: 12, right: 12 }}
                    >
                      <i className="bi bi-clock me-1"></i>
                      {course.duration}
                    </span>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-1">{course.title}</h3>
                    <div className="text-secondary small mb-3">
                      {course.degree}
                    </div>

                    <p className="text-secondary flex-grow-1">{course.summary}</p>

                    <div className="row g-2 text-center small mb-3">
                      <div className="col-4">
                        <div className={`tu-tint-${course.tone} rounded-3 py-2`}>
                          <div className="fw-bold">{course.credits}</div>
                          <div className="text-secondary">Credits</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className={`tu-tint-${course.tone} rounded-3 py-2`}>
                          <div className="fw-bold">{course.careers.length}</div>
                          <div className="text-secondary">Careers</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className={`tu-tint-${course.tone} rounded-3 py-2`}>
                          <div className="fw-bold">{course.mode === "On Campus" ? "Campus" : course.mode}</div>
                          <div className="text-secondary">Mode</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <a
                        href={`#${course.id}`}
                        className="btn btn-primary flex-grow-1"
                      >
                        View details
                      </a>
                      <Link
                        to="/register"
                        className="btn btn-outline-primary"
                        aria-label={`Apply for ${course.title}`}
                      >
                        <i className="bi bi-send"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Detailed program sections ---------- */}
      {courses.map((course, index) => (
        <section
          id={course.id}
          key={course.id}
          className={`tu-section ${index % 2 === 1 ? "tu-section-alt" : ""}`}
        >
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="tu-sticky">
                  <img
                    className="rounded-4 shadow-sm w-100 mb-4"
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                  />

                  <div className="tu-card bg-white p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span
                        className={`tu-icon-tile tu-icon-tile--${course.tone}`}
                      >
                        <i className={`bi ${course.icon}`}></i>
                      </span>
                      <div>
                        <h6 className="fw-bold mb-0">Program snapshot</h6>
                        <small className="text-secondary">
                          {course.degree}
                        </small>
                      </div>
                    </div>

                    <ul className="list-unstyled d-grid gap-2 mb-0">
                      <li className="d-flex justify-content-between">
                        <span className="text-secondary">Level</span>
                        <span className="fw-semibold">{course.level}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span className="text-secondary">Duration</span>
                        <span className="fw-semibold">{course.duration}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span className="text-secondary">Credits</span>
                        <span className="fw-semibold">{course.credits}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span className="text-secondary">Mode</span>
                        <span className="fw-semibold">{course.mode}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span className="text-secondary">Tuition</span>
                        <span className="fw-semibold">{course.tuition}</span>
                      </li>
                    </ul>

                    <Link
                      to="/register"
                      className="btn btn-primary w-100 mt-4"
                    >
                      <i className="bi bi-send me-1"></i>
                      Apply for {course.title}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <p className="tu-eyebrow mb-2">Program {index + 1} of {courses.length}</p>
                <h2 className="fw-bold mb-3">{course.title}</h2>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className={`tu-badge-soft tu-badge-soft--${course.tone}`}>
                    <i className="bi bi-mortarboard me-1"></i>
                    {course.degree}
                  </span>
                  <span className="tu-badge-soft tu-badge-soft--blue">
                    <i className="bi bi-clock me-1"></i>
                    {course.duration}
                  </span>
                  <span className="tu-badge-soft tu-badge-soft--amber">
                    <i className="bi bi-award me-1"></i>
                    {course.credits} credits
                  </span>
                </div>

                <p className="text-secondary">{course.description}</p>

                <h5 className="fw-bold mt-4 mb-3">Program highlights</h5>
                <div className="row g-3 mb-4">
                  {course.highlights.map((highlight) => (
                    <div className="col-sm-6" key={highlight}>
                      <div
                        className={`tu-list-row tu-tint-${course.tone} d-flex gap-2 h-100 p-3`}
                      >
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        <span className="small fw-semibold">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h5 className="fw-bold mb-3">Curriculum</h5>
                <div className="mb-4">
                  <CurriculumAccordion curriculum={course.curriculum} />
                </div>

                <h5 className="fw-bold mb-3">Career paths</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {course.careers.map((career) => (
                    <span
                      className={`tu-badge-soft tu-badge-soft--${course.tone}`}
                      key={career}
                    >
                      <i className="bi bi-briefcase me-1"></i>
                      {career}
                    </span>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <Link to="/register" className="btn btn-primary btn-lg">
                    Apply for {course.title}
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-chat-dots me-1"></i>
                    Talk to an advisor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ---------- Closing CTA ---------- */}
      <section className="tu-section pt-0">
        <div className="container">
          <div className="tu-hero rounded-4 p-4 p-lg-5 text-center">
            <p className="tu-eyebrow mb-2 text-warning">Admissions open</p>
            <h2 className="fw-bold mb-2">Not sure which program fits you?</h2>
            <p className="tu-hero-sub mb-4 mx-auto" style={{ maxWidth: 620 }}>
              Book a 20-minute call with an admissions advisor and we will map
              your goals to the right degree.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link to="/register" className="btn btn-light btn-lg">
                <i className="bi bi-pencil-square me-1"></i>
                Start your application
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                <i className="bi bi-headset me-1"></i>
                Contact admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
