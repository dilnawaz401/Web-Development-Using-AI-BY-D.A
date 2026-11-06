import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import StatCard from "../../components/StatCard";
import ProgressRing from "../../components/ProgressRing";
import {
  studentProfile,
  enrolledCourses,
  todayClasses,
  assignments,
  exams,
  announcements,
  studyHours,
} from "../../data/dashboard";

const Dashboard = () => {
  const { user } = useAuth();

  const pendingTasks = assignments.filter((item) => item.status === "pending");
  const totalCredits = enrolledCourses.reduce(
    (sum, course) => sum + course.credits,
    0,
  );
  const overallProgress = Math.round(
    enrolledCourses.reduce((sum, course) => sum + course.progress, 0) /
      enrolledCourses.length,
  );
  const creditProgress = Math.round(
    (studentProfile.creditsEarned / studentProfile.creditsTotal) * 100,
  );
  const maxHours = Math.max(...studyHours.map((item) => item.hours));

  const stats = [
    {
      icon: "bi-journal-bookmark",
      tone: "green",
      label: "Enrolled Courses",
      value: enrolledCourses.length,
      hint: `${totalCredits} credits this term`,
    },
    {
      icon: "bi-award",
      tone: "blue",
      label: "Credits Earned",
      value: studentProfile.creditsEarned,
      hint: `of ${studentProfile.creditsTotal} required`,
      progress: creditProgress,
    },
    {
      icon: "bi-graph-up-arrow",
      tone: "violet",
      label: "Current GPA",
      value: studentProfile.gpa.toFixed(2),
      hint: "Top 15% of cohort",
    },
    {
      icon: "bi-clipboard-check",
      tone: "amber",
      label: "Pending Tasks",
      value: pendingTasks.length,
      hint: "Assignments to submit",
    },
  ];

  const deadlines = [
    ...pendingTasks.map((item) => ({
      id: item.id,
      title: item.title,
      course: item.course,
      due: item.due,
      tone: "amber",
      icon: "bi-clipboard-check",
    })),
    ...exams.map((item) => ({
      id: item.id,
      title: item.title,
      course: item.course,
      due: item.date,
      tone: "rose",
      icon: "bi-pencil-square",
    })),
  ].slice(0, 4);

  const quickActions = [
    {
      to: "/dashboard/online-classes",
      icon: "bi-camera-video",
      label: "Join Online Class",
    },
    {
      to: "/dashboard/assignments",
      icon: "bi-clipboard-check",
      label: "Submit Assignment",
    },
    {
      to: "/dashboard/my-courses",
      icon: "bi-journal-bookmark",
      label: "Course Materials",
    },
  ];

  return (
    <div className="d-grid gap-4">
      {/* ---------- Welcome hero ---------- */}
      <section className="tu-dash-hero rounded-4 p-4 p-lg-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <p
              className="tu-eyebrow mb-2"
              style={{ color: "rgba(191, 240, 211, 0.95)" }}
            >
              {studentProfile.term} • {studentProfile.year} •{" "}
              {user?.studentId}
            </p>
            <h1 className="fw-bold h2 mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="tu-hero-sub mb-4">
              You have {pendingTasks.length} assignments due and{" "}
              {todayClasses.length} classes scheduled today. Keep up the great
              work.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/dashboard/schedules" className="btn btn-light">
                <i className="bi bi-calendar-week me-1"></i>
                View Schedule
              </Link>
              <Link
                to="/dashboard/assignments"
                className="btn btn-outline-light"
              >
                <i className="bi bi-clipboard-check me-1"></i>
                Assignments
              </Link>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex justify-content-center justify-content-lg-end gap-4">
              <div className="text-center">
                <ProgressRing
                  value={overallProgress}
                  size={116}
                  label="Overall course progress"
                />
                <small className="d-block mt-2 opacity-75">
                  Course progress
                </small>
              </div>
              <div className="text-center">
                <ProgressRing
                  value={creditProgress}
                  size={116}
                  label="Credits completed"
                />
                <small className="d-block mt-2 opacity-75">
                  Credits earned
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="row g-3">
        {stats.map((stat) => (
          <div className="col-sm-6 col-xl-3" key={stat.label}>
            <StatCard {...stat} />
          </div>
        ))}
      </section>

      <div className="row g-4">
        {/* ---------- Left column ---------- */}
        <div className="col-xl-8 d-grid gap-4">
          {/* Course progress */}
          <section className="tu-dash-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5 fw-bold mb-0">Course Progress</h2>
              <Link
                to="/dashboard/my-courses"
                className="small fw-semibold text-decoration-none"
              >
                View all <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="d-grid gap-2">
              {enrolledCourses.slice(0, 4).map((course) => (
                <div
                  className="tu-list-row d-flex align-items-center gap-3 p-3"
                  key={course.id}
                >
                  <span
                    className={`tu-icon-tile tu-icon-tile-sm tu-icon-tile--${course.tone} flex-shrink-0`}
                  >
                    <i className={`bi ${course.icon}`}></i>
                  </span>

                  <div className="flex-grow-1 tu-min-0">
                    <div className="d-flex justify-content-between align-items-center gap-2 mb-1">
                      <span className="fw-semibold text-truncate">
                        {course.title}
                      </span>
                      <small className="text-secondary flex-shrink-0">
                        {course.progress}%
                      </small>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label={`${course.title} progress`}
                      aria-valuenow={course.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: 7 }}
                    >
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <span className="tu-badge-soft tu-badge-soft--green flex-shrink-0">
                    {course.grade}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Today's classes */}
          <section className="tu-dash-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5 fw-bold mb-0">Today&apos;s Classes</h2>
              <span className="badge text-bg-light">
                {todayClasses.length} scheduled
              </span>
            </div>

            <div className="d-grid gap-2">
              {todayClasses.map((item) => (
                <div
                  className="tu-list-row d-flex align-items-center gap-3 p-3"
                  key={item.code}
                >
                  <span
                    className={`tu-icon-tile tu-icon-tile-sm tu-icon-tile--${item.tone} flex-shrink-0`}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div className="flex-grow-1 tu-min-0">
                    <div className="fw-semibold text-truncate">
                      {item.title}
                    </div>
                    <small className="text-secondary">
                      {item.room} • {item.instructor}
                    </small>
                  </div>
                  <span
                    className={`tu-badge-soft tu-badge-soft--${item.tone} flex-shrink-0`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Study hours */}
          <section className="tu-dash-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5 fw-bold mb-0">Study Hours</h2>
              <span className="text-secondary small">This week</span>
            </div>

            <div className="tu-bar-chart">
              {studyHours.map((item) => (
                <div className="tu-bar-col" key={item.day}>
                  <small className="text-secondary fw-semibold">
                    {item.hours}h
                  </small>
                  <div
                    className="tu-bar"
                    style={{ height: `${(item.hours / maxHours) * 100}%` }}
                  ></div>
                  <small className="text-secondary">{item.day}</small>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ---------- Right column ---------- */}
        <div className="col-xl-4 d-grid gap-4">
          {/* Deadlines */}
          <section className="tu-dash-card p-4">
            <h2 className="h5 fw-bold mb-3">Upcoming Deadlines</h2>
            <div className="d-grid gap-2">
              {deadlines.map((item) => (
                <div
                  className={`tu-list-row d-flex gap-3 p-3 tu-tint-${item.tone}`}
                  key={item.id}
                >
                  <span
                    className={`tu-icon-tile tu-icon-tile-sm tu-icon-tile--${item.tone} flex-shrink-0`}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div className="tu-min-0">
                    <div className="fw-semibold small text-truncate">
                      {item.title}
                    </div>
                    <small className="text-secondary d-block">
                      {item.course}
                    </small>
                    <small className="fw-semibold">
                      <i className="bi bi-clock me-1"></i>
                      {item.due}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Announcements */}
          <section className="tu-dash-card p-4">
            <h2 className="h5 fw-bold mb-3">Announcements</h2>
            <div className="d-grid gap-3">
              {announcements.map((item) => (
                <div className="d-flex gap-3" key={item.title}>
                  <span
                    className={`tu-icon-tile tu-icon-tile-sm tu-icon-tile--${item.tone} flex-shrink-0`}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div className="tu-min-0">
                    <div className="fw-semibold small">{item.title}</div>
                    <small className="text-secondary">{item.date}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick actions */}
          <section className="tu-dash-card p-4">
            <h2 className="h5 fw-bold mb-3">Quick Actions</h2>
            <div className="d-grid gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.to}
                  to={action.to}
                  className="btn btn-outline-primary d-flex align-items-center gap-2 text-start"
                >
                  <i className={`bi ${action.icon}`}></i>
                  {action.label}
                  <i className="bi bi-arrow-right ms-auto"></i>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
