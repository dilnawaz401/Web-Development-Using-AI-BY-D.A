import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="tu-dashboard d-flex">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={handleLogout}
      />

      {sidebarOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
        <header className="tu-dash-topbar sticky-top">
          <div className="d-flex align-items-center justify-content-between gap-3 px-3 px-lg-4 py-3">
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                className="btn btn-outline-primary d-lg-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
              >
                <i className="bi bi-list"></i>
              </button>
              <div>
                <div className="fw-bold lh-1">Student Dashboard</div>
                <small className="text-secondary">
                  {user?.program} • {user?.term}
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="text-end d-none d-sm-block">
                <div className="fw-semibold lh-1">{user?.name}</div>
                <small className="text-secondary">{user?.studentId}</small>
              </div>
              <span className="tu-icon-tile">
                <i className="bi bi-person-fill"></i>
              </span>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow-1 p-3 p-lg-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
