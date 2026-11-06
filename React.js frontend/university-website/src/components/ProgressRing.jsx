const ProgressRing = ({ value, size = 110, label = "Progress" }) => {
  return (
    <div
      className="tu-ring"
      style={{ "--value": value, width: size, height: size }}
      role="img"
      aria-label={`${label}: ${value}%`}
    >
      <span className="fs-5">{value}%</span>
    </div>
  );
};

export default ProgressRing;
