export const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Anita Desai",
      subject: "Software Engineering",
      email: "anita.desai@university.edu",
      experience: "12 years",
    },
    {
      id: 2,
      name: "Prof. Rajesh Menon",
      subject: "Data Structures",
      email: "rajesh.menon@university.edu",
      experience: "9 years",
    },
    {
      id: 3,
      name: "Ms. Fatima Sheikh",
      subject: "Web Development",
      email: "fatima.sheikh@university.edu",
      experience: "6 years",
    },
  ];

  return (
    <div>
      <h1>Teacher Information</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <h3>{teacher.name}</h3>
            <p>Subject: {teacher.subject}</p>
            <p>Email: {teacher.email}</p>
            <p>Experience: {teacher.experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
