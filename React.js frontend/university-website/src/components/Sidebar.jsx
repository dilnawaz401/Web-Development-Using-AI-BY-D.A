import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "bi-speedometer2", end: true },
  {
    to: "/dashboard/my-courses",
    label: "My Courses",
    icon: "bi-journal-bookmark",
  },
  {
    to: "/dashboard/schedules",
    label: "Schedules",
    icon: "bi-calendar-week",
  },
  {
    to: "/dashboard/online-classes",
    label: "Online Classes",
    icon: "bi-camera-video",
  },
  {
    to: "/dashboard/assignments",
    label: "Assignments & Exams",
    icon: "bi-clipboard-check",
  },
  {
    to: "/dashboard/grades",
    label: "My Grades",
    icon: "bi-bar-chart-line",
  },
];

const Sidebar = ({ open, onClose, onLogout }) => {
  return (
    <aside
      className={`tu-sidebar d-flex flex-column p-3 flex-shrink-0${
        open ? " is-open" : ""
      }`}
    >
      <Link
        to="/"
        className="tu-sidebar-brand d-flex align-items-center gap-2 mb-4 px-2"
        onClick={onClose}
      >
        <span className="tu-brand-mark">TU</span>
        <span>Tech University</span>
      </Link>

      <nav className="d-grid gap-1 flex-grow-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={onClose}
            className={({ isActive }) =>
              `tu-sidebar-link${isActive ? " active" : ""}`
            }
          >
            <i className={`bi ${link.icon}`}></i>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <hr className="border-secondary my-3" />

      <Link to="/" className="tu-sidebar-link mb-1" onClick={onClose}>
        <i className="bi bi-globe2"></i>
        <span>University Website</span>
      </Link>

      <button
        type="button"
        className="tu-sidebar-link border-0 bg-transparent w-100 text-start"
        onClick={onLogout}
      >
        <i className="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
