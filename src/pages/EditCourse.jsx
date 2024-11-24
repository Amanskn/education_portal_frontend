import { StatusCodes } from "http-status-codes";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

function EditCourse() {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the course details by ID
    fetch(`${apiUrl}/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched", data.data);
        setCourse(data.data);
      })
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === StatusCodes.OK) {
          setMessage("Course updated successfully!");
          setTimeout(() => navigate("/courses"), 2000); // Redirect to courses page after 2 seconds
        } else {
          setMessage("Failed to update the course.");
        }
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  if (!course) {
    return (
      <p className="text-center text-lg text-text-primary">
        Loading course details...
      </p>
    );
  }

  return (
    <div className="p-4 bg-background-primary text-text-primary min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Edit Course</h1>
      {message && (
        <p
          className={`text-lg ${
            message.includes("successfully")
              ? "text-accent-primary"
              : "text-red-500"
          } mb-4`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleUpdateSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Course Name</label>
            <input
              type="text"
              name="name"
              value={course.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Price</label>
            <input
              type="text"
              name="price"
              value={course.price}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Code</label>
            <input
              type="text"
              name="code"
              value={course.code}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Outcome</label>
            <input
              type="text"
              name="outcome"
              value={course.outcome}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Professor</label>
            <input
              type="text"
              name="professor"
              value={course.professor}
              onChange={handleInputChange}
              className="w-full p-2 bg-background-secondary text-text-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition"
          >
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
}

export { EditCourse };
