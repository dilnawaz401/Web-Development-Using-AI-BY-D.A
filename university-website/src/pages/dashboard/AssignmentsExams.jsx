import { useState } from "react";
import DashboardHeading from "../../components/DashboardHeading";
import StatusBadge from "../../components/StatusBadge";
import {
  assignments,
  exams,
  studentProfile,
} from "../../data/dashboard";

const filters = [
  { id: "all", label: "All", icon: "bi-collection" },
  { id: "pending", label: "Pending", icon: "bi-hourglass-split" },
  { id: "submitted", label: "Submitted", icon: "bi-send-check" },
  { id: "graded", label: "Graded", icon: "bi-patch-check" },
];

const AssignmentsExams = () => {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? assignments
      : assignments.filter((item) => item.status === active);

  const countFor = (id) =>
    id === "all"
      ? assignments.length
      : assignments.filter((item) => item.status === id).length;

  const pendingCount = countFor("pending");
  const totalPoints = assignments.reduce((sum, item) => sum + item.points, 0);

  return (
    <div>
      <DashboardHeading
        eyebrow={`${studentProfile.term} • ${studentProfile.year}`}
        title="Assignments & Exams"
        subtitle={`${pendingCount} assignments pending and ${exams.length} exams scheduled.`}
      >
        <button type="button" className="btn btn-outline-primary">
          <i className="bi bi-calendar3 me-1"></i> Exam Timetable
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-upload me-1"></i> Submit Work
        </button>
      </DashboardHeading>

      {/* Assignments */}
      <section className="tu-dash-card p-4 mb-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <h2 className="h5 fw-bold mb-0">Assignments</h2>
          <div className="d-flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={`btn btn-sm ${
                  active === filter.id
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                <i className={`bi ${filter.icon} me-1`}></i>
                {filter.label}
                <span className="ms-1 opacity-75">({countFor(filter.id)})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="d-grid gap-2">
          {visible.map((item) => (
            <div
              className="tu-list-row d-flex flex-wrap align-items-center gap-3 p-3"
              key={item.id}
            >
              <span className="tu-icon-tile tu-icon-tile-sm tu-icon-tile--blue flex-shrink-0">
                <i className="bi bi-file-earmark-text"></i>
              </span>

              <div className="flex-grow-1 tu-min-0">
                <div className="fw-semibold">{item.title}</div>
                <small className="text-secondary">
                  {item.code} • {item.course} • {item.points} points
                </small>
              </div>

              <div className="text-md-end">
                <small className="text-secondary d-block">
                  <i className="bi bi-calendar-event me-1"></i>
                  {item.due}
                </small>
                {item.grade && (
                  <small className="fw-semibold text-success">
                    Score: {item.grade}
                  </small>
                )}
              </div>

              <StatusBadge status={item.status} />

              <button
                type="button"
                className={`btn btn-sm flex-shrink-0 ${
                  item.status === "pending"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                {item.status === "pending" ? "Submit" : "View"}
              </button>
            </div>
          ))}

          {visible.length === 0 && (
            <p className="text-secondary mb-0 py-4 text-center">
              Nothing here yet.
            </p>
          )}
        </div>

        <hr className="my-4" />
        <p className="text-secondary small mb-0">
          <i className="bi bi-info-circle me-1"></i>
          Total graded coursework this term: <strong>{totalPoints}</strong>{" "}
          points across {assignments.length} assignments.
        </p>
      </section>

      {/* Exams */}
      <section>
        <h2 className="h5 fw-bold mb-3">Exam Schedule</h2>
        <div className="row row-cols-1 row-cols-lg-3 g-3">
          {exams.map((exam) => (
            <div className="col" key={exam.id}>
              <article className="tu-dash-card tu-hover-lift h-100">
                <div className="p-4 tu-tint-rose">
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <span className="tu-icon-tile tu-icon-tile--rose">
                      <i className="bi bi-pencil-square"></i>
                    </span>
                    <span className="tu-badge-soft tu-badge-soft--rose">
                      {exam.type}
                    </span>
                  </div>
                  <h3 className="h6 fw-bold mb-1">{exam.title}</h3>
                  <small className="text-secondary">
                    {exam.code} • {exam.course}
                  </small>
                </div>

                <div className="p-4 small">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">
                      <i className="bi bi-calendar-event me-1"></i>Date
                    </span>
                    <span className="fw-semibold">{exam.date}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">
                      <i className="bi bi-clock me-1"></i>Time
                    </span>
                    <span className="fw-semibold">{exam.time}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">
                      <i className="bi bi-hourglass me-1"></i>Duration
                    </span>
                    <span className="fw-semibold">{exam.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">
                      <i className="bi bi-geo-alt me-1"></i>Room
                    </span>
                    <span className="fw-semibold">{exam.room}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssignmentsExams;
