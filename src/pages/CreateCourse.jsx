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
    <div className="bg-background-primary text-text-primary min-h-screen p-8 ">
      <h1 className="text-center text-4xl font-bold mb-6">
        Create a New Course
      </h1>
      {message && (
        <p
          className={`text-center text-lg ${
            message.includes("successfully")
              ? "text-accent-primary"
              : "text-red-500"
          } mb-4`}
        >
          {message}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-lg bg-background-secondary p-6 rounded-lg shadow-lg mx-auto"
      >
        <div>
          <label
            htmlFor="name-input"
            className="block text-lg font-medium mb-1"
          >
            Course Name
          </label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="Enter course name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="duration-input"
            className="block text-lg font-medium mb-1"
          >
            Duration (In weeks)
          </label>
          <input
            id="duration-input"
            type="number"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="e.g., For 12 weeks just type 12"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price-input"
            className="block text-lg font-medium mb-1"
          >
            Price (In Rupees)
          </label>
          <input
            id="price-input"
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="e.g., For ₹5000 just type 5000"
            required
          />
        </div>
        <div>
          <label
            htmlFor="code-input"
            className="block text-lg font-medium mb-1"
          >
            Course Code
          </label>
          <input
            id="code-input"
            type="text"
            name="code"
            value={courseData.code}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="e.g., WD101"
            required
          />
        </div>
        <div>
          <label
            htmlFor="outcome-input"
            className="block text-lg font-medium mb-1"
          >
            Outcome
          </label>
          <input
            id="outcome-input"
            type="text"
            name="outcome"
            value={courseData.outcome}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="e.g., Learn to build websites"
            required
          />
        </div>
        <div>
          <label
            htmlFor="professor-input"
            className="block text-lg font-medium mb-1"
          >
            Professor
          </label>
          <input
            id="professor-input"
            type="text"
            name="professor"
            value={courseData.professor}
            onChange={handleChange}
            className="w-full p-3 bg-background-primary border border-border rounded-lg text-text-primary placeholder-text-placeholder focus:outline-none focus:ring focus:ring-accent-primary"
            placeholder="e.g., John Doe"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}

export { CreateCourse };
