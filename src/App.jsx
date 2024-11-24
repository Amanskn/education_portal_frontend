import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { CreateCourse } from "./pages/CreateCourse";
import { EditCourse } from "./pages/EditCourse";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
