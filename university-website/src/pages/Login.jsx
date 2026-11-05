import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { image } from "../lib/image";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // UI-only mock login: any credentials are accepted.
    login({ email: form.email });
    navigate("/dashboard");
  };

  return (
    <section className="tu-section">
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              className="rounded-4 shadow-sm w-100 mb-4"
              src={image(
                "students walking through a bright modern university campus corridor",
                "landscape_4_3"
              )}
              alt="Tech University campus"
              loading="lazy"
            />
            <h3 className="fw-bold">Welcome back to Tech University</h3>
            <p className="text-secondary mb-0">
              Sign in to access your dashboard, courses, schedules and grades.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="tu-card bg-white p-4 p-lg-5">
              <div className="text-center mb-4">
                <span className="tu-brand-mark mx-auto mb-3">TU</span>
                <h2 className="fw-bold mb-1">Student Login</h2>
                <p className="text-secondary mb-0">
                  Enter any email and password to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginEmail">
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      id="loginEmail"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      id="loginPassword"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#forgot" className="small">
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Login
                </button>
              </form>

              <p className="text-center text-secondary mb-0 mt-4">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="fw-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
