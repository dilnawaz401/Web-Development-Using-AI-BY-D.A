const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <section className="bg-primary-subtle border-bottom py-5">
      <div className="container py-3">
        {eyebrow && <p className="tu-eyebrow mb-2">{eyebrow}</p>}
        <h1 className="fw-bold display-5 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-secondary fs-5 mb-0" style={{ maxWidth: 760 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
