import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import UserInformation from "./Components/UserInformation";
import EventHandling from "./Components/EventHandling";
import Counter from "./Components/Counter";
import ConditionalRendering from "./Components/ConditionalRendering";
import StudentList from "./Components/StudentList";
import ToastWelcome from "./Components/ToastWelcome";
import UserList from "./Components/UserList";

import { Home } from "./pages/Home";
import { Teachers } from "./pages/Teachers";
import { Courses } from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/user-info"
            element={
              <UserInformation
                firstName="Dilnawaz"
                lastName="Ansari"
                email="dilnawaz@example.com"
                age={22}
                city="Chennai"
              />
            }
          />
          <Route path="/event" element={<EventHandling />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/conditional" element={<ConditionalRendering />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/toast" element={<ToastWelcome />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
