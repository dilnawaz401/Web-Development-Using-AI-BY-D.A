import { Link } from "react-router-dom";

const exercises = [
  { to: "/header", label: "1. Header Component" },
  { to: "/blog", label: "2. Blog Post (JSX)" },
  { to: "/user-info", label: "3. User Information (Props)" },
  { to: "/event", label: "4. Event Handling (Alert + Log)" },
  { to: "/counter", label: "5. Counter (useState)" },
  { to: "/conditional", label: "6. Conditional Rendering (Rent / Sale)" },
  { to: "/students", label: "7. Student List (Array of 5)" },
  { to: "/toast", label: "8. Toastify Welcome Message" },
  { to: "/teachers", label: "9a. Teachers Page" },
  { to: "/courses", label: "9b. Courses Page (Software Engineering)" },
  { to: "/users", label: "10. Fetch Users (JSONPlaceholder)" },
];

export const Home = () => {
  return (
    <div>
      <h1>React.js Exercises</h1>
      <p>Select an exercise to view it:</p>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.to}>
            <Link to={exercise.to}>{exercise.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
