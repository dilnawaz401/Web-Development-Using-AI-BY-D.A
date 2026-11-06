const StatCard = ({ icon, tone = "green", label, value, hint, progress }) => {
  return (
    <div className="tu-dash-card tu-hover-lift p-4 h-100">
      <div className="d-flex justify-content-between align-items-start gap-3">
        <div>
          <p className="text-secondary mb-1 small fw-semibold">{label}</p>
          <div className="fs-2 fw-bold lh-1">{value}</div>
          {hint && <small className="text-secondary d-block mt-1">{hint}</small>}
        </div>
        <span className={`tu-icon-tile tu-icon-tile--${tone}`}>
          <i className={`bi ${icon}`}></i>
        </span>
      </div>

      {typeof progress === "number" && (
        <div
          className="progress mt-3"
          role="progressbar"
          aria-label={`${label} progress`}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: 6 }}
        >
          <div
            className="progress-bar bg-primary"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
