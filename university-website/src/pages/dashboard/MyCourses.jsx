import { Link } from "react-router-dom";
import DashboardHeading from "../../components/DashboardHeading";
import StatCard from "../../components/StatCard";
import { studentProfile, enrolledCourses } from "../../data/dashboard";

const MyCourses = () => {
  const totalCredits = enrolledCourses.reduce(
    (sum, course) => sum + course.credits,
    0,
  );
  const avgProgress = Math.round(
    enrolledCourses.reduce((sum, course) => sum + course.progress, 0) /
      enrolledCourses.length,
  );
  const totalMaterials = enrolledCourses.reduce(
    (sum, course) => sum + course.materials,
    0,
  );

  const summary = [
    {
      icon: "bi-journal-bookmark",
      tone: "green",
      label: "Enrolled Courses",
      value: enrolledCourses.length,
      hint: `${totalCredits} credits`,
    },
    {
      icon: "bi-collection-play",
      tone: "blue",
      label: "Course Materials",
      value: totalMaterials,
      hint: "Files & recordings",
    },
    {
      icon: "bi-speedometer2",
      tone: "violet",
      label: "Average Progress",
      value: `${avgProgress}%`,
      hint: "Across all courses",
      progress: avgProgress,
    },
    {
      icon: "bi-graph-up-arrow",
      tone: "amber",
      label: "Current GPA",
      value: studentProfile.gpa.toFixed(2),
      hint: studentProfile.term,
    },
  ];

  return (
    <div>
      <DashboardHeading
        eyebrow={`${studentProfile.program} • ${studentProfile.year}`}
        title="My Courses"
        subtitle={`You are enrolled in ${enrolledCourses.length} courses this term.`}
      >
        <Link to="/dashboard/schedules" className="btn btn-outline-primary">
          <i className="bi bi-calendar-week me-1"></i> Weekly Schedule
        </Link>
        <Link to="/dashboard/assignments" className="btn btn-primary">
          <i className="bi bi-clipboard-check me-1"></i> Assignments
        </Link>
      </DashboardHeading>

      <section className="row g-3 mb-4">
        {summary.map((item) => (
          <div className="col-sm-6 col-xl-3" key={item.label}>
            <StatCard {...item} />
          </div>
        ))}
      </section>

      <div className="row row-cols-1 row-cols-xl-2 g-4">
        {enrolledCourses.map((course) => (
          <div className="col" key={course.id}>
            <article className="tu-dash-card tu-hover-lift h-100 d-flex flex-column">
              <div className={`p-4 tu-tint-${course.tone}`}>
                <div className="d-flex align-items-start gap-3">
                  <span
                    className={`tu-icon-tile tu-icon-tile-lg tu-icon-tile--${course.tone} flex-shrink-0`}
                  >
                    <i className={`bi ${course.icon}`}></i>
                  </span>
                  <div className="tu-min-0 flex-grow-1">
                    <span
                      className={`tu-badge-soft tu-badge-soft--${course.tone} mb-2`}
                    >
                      {course.code}
                    </span>
                    <h3 className="h5 fw-bold mb-1">{course.title}</h3>
                    <small className="text-secondary d-block">
                      <i className="bi bi-person-badge me-1"></i>
                      {course.instructor}
                    </small>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className="fs-3 fw-bold lh-1">{course.grade}</div>
                    <small className="text-secondary">Grade</small>
                  </div>
                </div>
              </div>

              <div className="p-4 d-flex flex-column flex-grow-1">
                <div className="row g-2 mb-3 small">
                  <div className="col-6">
                    <div className="text-secondary">
                      <i className="bi bi-clock-history me-1"></i>Schedule
                    </div>
                    <div className="fw-semibold">{course.schedule}</div>
                  </div>
                  <div className="col-6">
                    <div className="text-secondary">
                      <i className="bi bi-geo-alt me-1"></i>Room
                    </div>
                    <div className="fw-semibold">{course.room}</div>
                  </div>
                  <div className="col-6">
                    <div className="text-secondary">
                      <i className="bi bi-award me-1"></i>Credits
                    </div>
                    <div className="fw-semibold">{course.credits} credits</div>
                  </div>
                  <div className="col-6">
                    <div className="text-secondary">
                      <i className="bi bi-folder2-open me-1"></i>Materials
                    </div>
                    <div className="fw-semibold">
                      {course.materials} files
                    </div>
                  </div>
                </div>

                <div className="mb-1 d-flex justify-content-between align-items-center small">
                  <span className="text-secondary fw-semibold">
                    Course progress
                  </span>
                  <span className="fw-bold">{course.progress}%</span>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label={`${course.title} progress`}
                  aria-valuenow={course.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: 8 }}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="alert alert-light border py-2 px-3 small mt-auto">
                  <span className="fw-semibold">Next up:</span>{" "}
                  {course.nextTopic}
                </div>

                <div className="d-flex gap-2 mt-3">
                  <button type="button" className="btn btn-primary flex-grow-1">
                    <i className="bi bi-folder2-open me-1"></i>Materials
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary flex-grow-1"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>Course Page
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
