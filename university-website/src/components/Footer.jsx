import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="tu-footer pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="tu-brand-mark">TU</span>
              <span className="fs-5 fw-bold text-white">Tech University</span>
            </div>
            <p className="mb-3">
              Shaping the next generation of software engineers, data
              scientists and cyber security professionals since 1998.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="text-white fw-bold mb-3">Programs</h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li>
                <Link to="/courses">Software Engineering</Link>
              </li>
              <li>
                <Link to="/courses">Data Science</Link>
              </li>
              <li>
                <Link to="/courses">Cyber Security</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">Get in touch</h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li>
                <i className="bi bi-geo-alt me-2"></i>12 Innovation Drive,
                Chennai, India
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>+91 44 4000 1234
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>hello@techuniversity.edu
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small">
          <span>© {YEAR} Tech University. All rights reserved.</span>
          <span className="d-flex gap-3">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
