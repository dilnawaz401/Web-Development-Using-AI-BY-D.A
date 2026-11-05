import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const terms = ["Fall 2026", "Spring 2027", "Summer 2027"];

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  course: courses[0].id,
  term: terms[0],
  agree: false,
};

const Register = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match. Please re-enter them.");
      return;
    }

    setSubmitted(true);
  };

  const selectedCourse = courses.find((course) => course.id === form.course);

  if (submitted) {
    return (
      <section className="tu-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="tu-card bg-white p-4 p-lg-5 text-center">
                <span
                  className="tu-icon-tile mx-auto mb-3"
                  style={{ width: 64, height: 64, fontSize: "1.75rem" }}
                >
                  <i className="bi bi-check2-circle"></i>
                </span>
                <h2 className="fw-bold mb-2">Registration submitted!</h2>
                <p className="text-secondary mb-4">
                  Thank you, <strong>{form.fullName || "student"}</strong>. Your
                  application has been received.
                </p>

                <div className="text-start mb-4">
                  <h6 className="fw-bold">What happens next?</h6>
                  <ol className="mb-0">
                    <li className="mb-2">
                      You will receive a confirmation email at{" "}
                      <strong>{form.email || "your inbox"}</strong> within a few
                      minutes.
                    </li>
                    <li className="mb-2">
                      Upload your transcripts and ID through the link in that
                      email.
                    </li>
                    <li className="mb-2">
                      Complete the online aptitude assessment.
                    </li>
                    <li>
                      Our admissions team will contact you to schedule an
                      interview.
                    </li>
                  </ol>
                </div>

                <div className="alert alert-success text-start mb-4">
                  <i className="bi bi-mortarboard me-2"></i>
                  You applied for <strong>{selectedCourse?.title}</strong> —{" "}
                  {form.term} intake.
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <Link to="/courses" className="btn btn-primary">
                    Explore Courses
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tu-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <p className="tu-eyebrow mb-2">Admissions</p>
              <h1 className="fw-bold display-6 mb-2">Create your account</h1>
              <p className="text-secondary mb-0">
                Apply to Tech University in a few simple steps.
              </p>
            </div>

            <div className="tu-card bg-white p-4 p-lg-5">
              {error && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
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
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    id="registerEmail"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    id="registerPassword"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="course">
                    Select Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="form-select"
                    value={form.course}
                    onChange={handleChange}
                  >
                    {courses.map((course) => (
                      <option value={course.id} key={course.id}>
                        {course.title} ({course.degree})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="term">
                    Enrollment Term
                  </label>
                  <select
                    id="term"
                    name="term"
                    className="form-select"
                    value={form.term}
                    onChange={handleChange}
                  >
                    {terms.map((term) => (
                      <option value={term} key={term}>
                        {term}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree to the{" "}
                      <a href="#terms">Terms of Use</a> and{" "}
                      <a href="#privacy">Privacy Policy</a>, and confirm the
                      information provided is accurate.
                    </label>
                  </div>
                </div>

                <div className="col-12 d-grid d-sm-block">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5"
                  >
                    Submit application
                  </button>
                </div>
              </form>

              <p className="text-center text-secondary mb-0 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="fw-semibold">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
