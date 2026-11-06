import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const publicLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="tu-navbar sticky-top">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link
          className="tu-brand d-flex align-items-center gap-2"
          to="/"
          onClick={closeMenu}
        >
          <span className="tu-brand-mark">TU</span>
          <span>
            Tech <span className="text-primary">University</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`}>
          {/* Public menu is hidden once the user is logged in. */}
          {!isAuthenticated && (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {publicLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `nav-link px-3${isActive ? " active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <div
            className={`d-flex flex-column flex-lg-row gap-2 ${
              isAuthenticated ? "ms-auto" : "ms-lg-4"
            }`}
          >
            {isAuthenticated ? (
              <>
                <span className="navbar-text small fw-semibold align-self-lg-center">
                  <i className="bi bi-person-circle me-1"></i>
                  {user?.name}
                </span>
                <Link
                  to="/dashboard"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  My Dashboard
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-primary"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
