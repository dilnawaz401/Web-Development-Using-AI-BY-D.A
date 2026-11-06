import DashboardHeading from "../../components/DashboardHeading";
import StatusBadge from "../../components/StatusBadge";
import { onlineClasses, recordings, studentProfile } from "../../data/dashboard";

const OnlineClasses = () => {
  const liveNow = onlineClasses.filter((item) => item.status === "live");
  const nextUp = onlineClasses.filter((item) => item.status !== "live");

  return (
    <div>
      <DashboardHeading
        eyebrow={`${studentProfile.term} • ${studentProfile.year}`}
        title="Online Classes"
        subtitle="Join live sessions, catch up on recordings and check connection requirements."
      >
        <button type="button" className="btn btn-outline-primary">
          <i className="bi bi-gear me-1"></i> Test Audio &amp; Video
        </button>
      </DashboardHeading>

      {/* Live now banner */}
      {liveNow.length > 0 && (
        <section className="tu-dash-hero rounded-4 p-4 mb-4">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <span className="tu-badge-soft tu-badge-soft--green mb-2">
                <span className="spinner-grow spinner-grow-sm me-2"></span>
                Live now
              </span>
              <h2 className="h5 fw-bold mb-1">{liveNow[0].title}</h2>
              <p className="tu-hero-sub mb-0">
                <i className="bi bi-person-badge me-1"></i>
                {liveNow[0].instructor} • {liveNow[0].platform} •{" "}
                {liveNow[0].time}
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button type="button" className="btn btn-light btn-lg">
                <i className="bi bi-camera-video-fill me-2"></i>Join Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming sessions */}
      <section className="mb-4">
        <h2 className="h5 fw-bold mb-3">Upcoming Sessions</h2>
        <div className="row row-cols-1 row-cols-lg-3 g-3">
          {nextUp.map((item) => (
            <div className="col" key={item.id}>
              <article className="tu-dash-card tu-hover-lift h-100 d-flex flex-column">
                <div className={`p-4 tu-tint-${item.tone}`}>
                  <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                    <span
                      className={`tu-icon-tile tu-icon-tile-lg tu-icon-tile--${item.tone}`}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    <StatusBadge status={item.status} />
                  </div>
                  <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                  <small className="text-secondary">{item.code}</small>
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="small mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-secondary">
                        <i className="bi bi-person-badge me-1"></i>Instructor
                      </span>
                      <span className="fw-semibold">{item.instructor}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-secondary">
                        <i className="bi bi-display me-1"></i>Platform
                      </span>
                      <span className="fw-semibold">{item.platform}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-secondary">
                        <i className="bi bi-clock me-1"></i>Time
                      </span>
                      <span className="fw-semibold">{item.time}</span>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <button
                      type="button"
                      className="btn btn-primary flex-grow-1"
                    >
                      <i className="bi bi-camera-video me-1"></i>Join
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      aria-label="Add to calendar"
                    >
                      <i className="bi bi-calendar-plus"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Recordings */}
      <section className="tu-dash-card p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 fw-bold mb-0">Recent Recordings</h2>
          <span className="text-secondary small">
            {recordings.length} available
          </span>
        </div>

        <div className="d-grid gap-2">
          {recordings.map((item) => (
            <div
              className="tu-list-row d-flex align-items-center gap-3 p-3"
              key={item.title}
            >
              <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--blue flex-shrink-0">
                <i className="bi bi-play-circle"></i>
              </span>
              <div className="flex-grow-1 tu-min-0">
                <div className="fw-semibold text-truncate">{item.title}</div>
                <small className="text-secondary">
                  {item.code} • {item.date}
                </small>
              </div>
              <span className="tu-badge-soft tu-badge-soft--blue flex-shrink-0">
                {item.duration}
              </span>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary flex-shrink-0"
              >
                <i className="bi bi-play-fill"></i> Watch
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;
