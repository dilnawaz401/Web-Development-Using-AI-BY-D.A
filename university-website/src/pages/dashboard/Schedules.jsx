import DashboardHeading from "../../components/DashboardHeading";
import { weekSchedule, todayClasses, studentProfile } from "../../data/dashboard";

const Schedules = () => {
  const totalClasses = weekSchedule.reduce(
    (sum, day) => sum + day.classes.length,
    0,
  );

  return (
    <div>
      <DashboardHeading
        eyebrow={`${studentProfile.term} • ${studentProfile.year}`}
        title="Schedules"
        subtitle={`${totalClasses} classes across the week. All times are campus local time.`}
      >
        <button type="button" className="btn btn-outline-primary">
          <i className="bi bi-download me-1"></i> Export PDF
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-bell me-1"></i> Reminders
        </button>
      </DashboardHeading>

      {/* Today at a glance */}
      <section className="tu-dash-card tu-dash-hero rounded-4 p-4 mb-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <div>
            <p
              className="tu-eyebrow mb-1"
              style={{ color: "rgba(191, 240, 211, 0.95)" }}
            >
              Today
            </p>
            <h2 className="h5 fw-bold mb-0">Wednesday, 5 November 2026</h2>
          </div>
          <span className="tu-badge-soft tu-badge-soft--green">
            {todayClasses.length} classes
          </span>
        </div>

        <div className="row g-3">
          {todayClasses.map((item) => (
            <div className="col-md-4" key={item.code}>
              <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-3 h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className={`bi ${item.icon}`}></i>
                  <span className="fw-bold">{item.time}</span>
                </div>
                <div className="fw-semibold">{item.title}</div>
                <small className="tu-hero-sub d-block">
                  {item.code} • {item.room}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly timetable */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-3">
        {weekSchedule.map((day) => (
          <div className="col" key={day.day}>
            <div className="tu-dash-card h-100 p-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="h6 fw-bold mb-0">{day.day}</h3>
                <span className="badge text-bg-light">
                  {day.classes.length}
                </span>
              </div>

              <div className="d-grid gap-2">
                {day.classes.map((item) => (
                  <div
                    className={`tu-list-row tu-tint-${item.tone} p-3`}
                    key={`${day.day}-${item.code}-${item.time}`}
                  >
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span
                        className={`tu-badge-soft tu-badge-soft--${item.tone}`}
                      >
                        {item.time}
                      </span>
                    </div>
                    <div className="fw-semibold small">{item.title}</div>
                    <small className="text-secondary d-block">
                      {item.code} • {item.room}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <section className="tu-dash-card p-4 mt-4">
        <h3 className="h6 fw-bold mb-3">Legend</h3>
        <div className="d-flex flex-wrap gap-3 small">
          <span className="d-inline-flex align-items-center gap-2">
            <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--green">
              <i className="bi bi-diagram-3"></i>
            </span>
            Software Architecture
          </span>
          <span className="d-inline-flex align-items-center gap-2">
            <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--blue">
              <i className="bi bi-cloud"></i>
            </span>
            Cloud &amp; DevOps
          </span>
          <span className="d-inline-flex align-items-center gap-2">
            <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--amber">
              <i className="bi bi-bug"></i>
            </span>
            Software Testing
          </span>
          <span className="d-inline-flex align-items-center gap-2">
            <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--violet">
              <i className="bi bi-people"></i>
            </span>
            Team Project Studio
          </span>
          <span className="d-inline-flex align-items-center gap-2">
            <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--rose">
              <i className="bi bi-calculator"></i>
            </span>
            Discrete Mathematics
          </span>
        </div>
      </section>
    </div>
  );
};

export default Schedules;
