export const Courses = () => {
  const course = {
    name: "Software Engineering",
    duration: "4 Years",
    credits: 160,
    modules: [
      "Programming Fundamentals",
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Software Design and Architecture",
      "Database Management Systems",
      "Web Development",
      "Software Testing and Quality Assurance",
      "Agile Project Management",
    ],
  };

  return (
    <div>
      <h1>Course Information</h1>
      <h2>{course.name} Program</h2>
      <p>Duration: {course.duration}</p>
      <p>Total Credits: {course.credits}</p>

      <h3>Modules</h3>
      <ul>
        {course.modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
};
