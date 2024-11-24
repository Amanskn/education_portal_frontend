import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-background-secondary text-text-primary p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Education Portal</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline text-text-primary">
            Home
          </Link>
          <Link to="/courses" className="hover:underline text-text-primary">
            Courses
          </Link>
          <Link
            to="/create-course"
            className="hover:underline text-text-primary"
          >
            Create-A-Course
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
