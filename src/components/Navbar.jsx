import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Education Portal</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/create-course" className="hover:underline">
            Create-A-Course
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
