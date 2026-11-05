const StudentList = () => {
  const students = [
    { id: 1, firstName: "Aarav", lastName: "Sharma", maths: "A", english: "B" },
    { id: 2, firstName: "Diya", lastName: "Patel", maths: "B", english: "A" },
    { id: 3, firstName: "Rohan", lastName: "Kumar", maths: "C", english: "B" },
    { id: 4, firstName: "Sara", lastName: "Khan", maths: "A", english: "A" },
    { id: 5, firstName: "Vivaan", lastName: "Reddy", maths: "B", english: "C" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maths</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.maths}</td>
              <td>{student.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
