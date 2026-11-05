import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/header", label: "Header" },
  { to: "/blog", label: "Blog" },
  { to: "/user-info", label: "User Info" },
  { to: "/event", label: "Event" },
  { to: "/counter", label: "Counter" },
  { to: "/conditional", label: "Rent / Sale" },
  { to: "/students", label: "Students" },
  { to: "/toast", label: "Toastify" },
  { to: "/users", label: "Users API" },
  { to: "/teachers", label: "Teachers" },
  { to: "/courses", label: "Courses" },
];

const Nav = () => {
  return (
    <nav style={styles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {}),
          })}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    padding: "12px 16px",
    background: "#1e1e2f",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  link: {
    color: "#c9c9d4",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  active: {
    background: "#4f46e5",
    color: "#fff",
  },
};

export default Nav;
