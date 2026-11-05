import { statusMeta } from "../data/dashboard";

const StatusBadge = ({ status }) => {
  const meta = statusMeta[status] ?? {
    label: status,
    tone: "blue",
    icon: "bi-dot",
  };

  return (
    <span className={`tu-badge-soft tu-badge-soft--${meta.tone}`}>
      <i className={`bi ${meta.icon} me-1`}></i>
      {meta.label}
    </span>
  );
};

export default StatusBadge;
