const DashboardHeading = ({ eyebrow, title, subtitle, children }) => {
  return (
    <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
      <div>
        {eyebrow && <p className="tu-eyebrow mb-1">{eyebrow}</p>}
        <h1 className="h3 fw-bold mb-1">{title}</h1>
        {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
      </div>
      {children && <div className="d-flex flex-wrap gap-2">{children}</div>}
    </div>
  );
};

export default DashboardHeading;
