import React, { useState } from "react";
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";

function CreateCourse() {
  const [courseData, setCourseData] = useState({
    name: "",
    duration: "",
    price: "",
    code: "",
    outcome: "",
    professor: "",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === StatusCodes.CREATED) {
          setMessage("Course created successfully!");
          setCourseData({
            name: "",
            duration: "",
            price: "",
            code: "",
            outcome: "",
            professor: "",
          });
          setTimeout(() => navigate("/courses"), 2000);
        } else {
          setMessage("Failed to create course. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error creating course:", error);
        setMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Create a New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-lg font-medium">Course Name</label>
          <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter course name"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Duration</label>
          <input
            type="text"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., 12 weeks"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Price</label>
          <input
            type="text"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., $299"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Course Code</label>
          <input
            type="text"
            name="code"
            value={courseData.code}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., WD101"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Outcome</label>
          <input
            type="text"
            name="outcome"
            value={courseData.outcome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., Learn to build websites"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Professor</label>
          <input
            type="text"
            name="professor"
            value={courseData.professor}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., John Doe"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Create Course
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}

export { CreateCourse };
