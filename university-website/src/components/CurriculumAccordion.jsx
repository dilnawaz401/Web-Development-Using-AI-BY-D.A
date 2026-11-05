import { useState } from "react";

const CurriculumAccordion = ({ curriculum }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {curriculum.map((year, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion-item" key={year.year}>
            <h2 className="accordion-header">
              <button
                type="button"
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {year.year}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
            >
              <div className="accordion-body">
                <ul className="mb-0">
                  {year.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumAccordion;
