import DashboardHeading from "../../components/DashboardHeading";
import ProgressRing from "../../components/ProgressRing";
import {
  studentProfile,
  semesterGpa,
  gradeBreakdown,
  transcript,
} from "../../data/dashboard";

const MyGrades = () => {
  const gpaPercent = Math.round((studentProfile.gpa / 4) * 100);
  const totalGradeCount = gradeBreakdown.reduce(
    (sum, item) => sum + item.count,
    0,
  );
  const transcriptCredits = transcript.reduce(
    (sum, item) => sum + item.credits,
    0,
  );

  const gpaTrend = semesterGpa.map((item) => ({
    ...item,
    height: Math.round((item.gpa / 4) * 100),
  }));

  return (
    <div>
      <DashboardHeading
        eyebrow={`${studentProfile.program} • ${studentProfile.year}`}
        title="My Grades"
        subtitle="Your cumulative performance, grade distribution and academic transcript."
      >
        <button type="button" className="btn btn-outline-primary">
          <i className="bi bi-envelope me-1"></i> Request Transcript
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-download me-1"></i> Download Report
        </button>
      </DashboardHeading>

      {/* GPA overview */}
      <section className="tu-dash-hero rounded-4 p-4 p-lg-5 mb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-4 text-center text-lg-start">
            <p
              className="tu-eyebrow mb-2"
              style={{ color: "rgba(191, 240, 211, 0.95)" }}
            >
              Cumulative GPA
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
              <ProgressRing value={gpaPercent} size={124} label="Cumulative GPA" />
              <div>
                <div className="display-5 fw-bold lh-1">
                  {studentProfile.gpa.toFixed(2)}
                </div>
                <small className="opacity-75">out of 4.00</small>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col-sm-4">
                <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-3 h-100">
                  <div className="small opacity-75 mb-1">
                    <i className="bi bi-award me-1"></i>Credits Earned
                  </div>
                  <div className="h4 fw-bold mb-0">
                    {studentProfile.creditsEarned}
                  </div>
                  <small className="opacity-75">
                    of {studentProfile.creditsTotal}
                  </small>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-3 h-100">
                  <div className="small opacity-75 mb-1">
                    <i className="bi bi-trophy me-1"></i>Class Standing
                  </div>
                  <div className="h4 fw-bold mb-0">Top 15%</div>
                  <small className="opacity-75">of cohort</small>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-3 h-100">
                  <div className="small opacity-75 mb-1">
                    <i className="bi bi-patch-check me-1"></i>Academic Status
                  </div>
                  <div className="h4 fw-bold mb-0">Good</div>
                  <small className="opacity-75">
                    {studentProfile.term}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row g-4 mb-4">
        {/* GPA trend */}
        <div className="col-xl-7">
          <section className="tu-dash-card p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5 fw-bold mb-0">GPA Trend</h2>
              <span className="text-secondary small">Last 5 terms</span>
            </div>

            <div className="tu-bar-chart">
              {gpaTrend.map((item) => (
                <div className="tu-bar-col" key={item.term}>
                  <small className="text-secondary fw-semibold">
                    {item.gpa.toFixed(2)}
                  </small>
                  <div className="tu-bar" style={{ height: `${item.height}%` }}></div>
                  <small className="text-secondary text-nowrap">
                    {item.term.replace(" ", "\u00A0")}
                  </small>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Grade breakdown */}
        <div className="col-xl-5">
          <section className="tu-dash-card p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5 fw-bold mb-0">Grade Distribution</h2>
              <span className="text-secondary small">
                {totalGradeCount} courses
              </span>
            </div>

            <div className="d-grid gap-3">
              {gradeBreakdown.map((item) => {
                const percent = Math.round((item.count / totalGradeCount) * 100);
                return (
                  <div key={item.grade}>
                    <div className="d-flex justify-content-between align-items-center mb-1 small">
                      <span className={`tu-badge-soft tu-badge-soft--${item.tone}`}>
                        {item.grade}
                      </span>
                      <span className="text-secondary">
                        {item.count} courses · {percent}%
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label={`Grade ${item.grade}`}
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: 8 }}
                    >
                      <div
                        className={`progress-bar tu-progress--${item.tone}`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Transcript */}
      <section className="tu-dash-card p-0 overflow-hidden">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 p-4 pb-3">
          <h2 className="h5 fw-bold mb-0">Academic Transcript</h2>
          <span className="text-secondary small">
            {transcript.length} recent courses · {transcriptCredits} credits
          </span>
        </div>

        <div className="table-responsive">
          <table className="table tu-table align-middle mb-0">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Course</th>
                <th scope="col">Term</th>
                <th scope="col" className="text-center">
                  Credits
                </th>
                <th scope="col" className="text-center">
                  Grade
                </th>
                <th scope="col" className="text-end">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {transcript.map((item) => (
                <tr key={item.code}>
                  <td className="fw-semibold">{item.code}</td>
                  <td>{item.title}</td>
                  <td className="text-secondary">{item.term}</td>
                  <td className="text-center">{item.credits}</td>
                  <td className="text-center">
                    <span className="tu-badge-soft tu-badge-soft--green">
                      {item.grade}
                    </span>
                  </td>
                  <td className="text-end fw-semibold">
                    {item.points.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyGrades;
