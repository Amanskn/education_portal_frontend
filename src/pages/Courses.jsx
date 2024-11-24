import { StatusCodes } from "http-status-codes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

function Courses() {
  console.log("Courses component rendered");

  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");

  // ============for navigation purpose I am going to use useNavigate hook
  const navigate = useNavigate();

  // Fetching all courses when the component is mounted
  useEffect(() => {
    console.log("Use effect ran");
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    fetch(`${apiUrl}/courses`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length === 0) {
          setMessage(
            "Hey folks, Courses coming soon, or if you want then you too can create it successfully using Create-A-Course button in the navbar. Enjoy the creation!!"
          );
        } else {
          setMessage("");
        }
        setCourses(data.data);
      })
      .catch((error) => {
        setMessage(
          "Hey folks, there came an internal server error while fetching the courses, we are trying our best to resolve this."
        );
        console.error("Error fetching courses:", error.message);
      });
  };

  // =================function to handle the deletion of a course
  const handleDelete = (id) => {
    fetch(`${apiUrl}/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === StatusCodes.OK) {
          setMessage("Course deleted successfully!");
          setTimeout(() => fetchCourses(), 2000);
        } else {
          setMessage("Failed to delete the course.");
        }
      })
      .catch((error) => {
        setMessage("Internal server error");
        console.error("Error deleting course:", error);
      });
  };

  const handleEdit = (courseId) => {
    console.log("courseId @@@@@@@@@", courseId);
    navigate(`/edit-course/${courseId}`);
  };

  return (
    <div className="p-4 bg-background-primary text-text-primary min-h-screen">
      <h1 className=" text-center text-4xl font-bold mb-4">
        Courses we offer are as follows:
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="p-6 bg-background-secondary text-text-secondary border border-border rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h2 className=" text-2xl font-semibold text-text-primary border-l-8 border-accent-primary pl-4">
              {course.name}
            </h2>
            <p>
              <strong className="text-text-primary">Duration:</strong>{" "}
              {course.duration} weeks
            </p>
            <p>
              <strong className="text-text-primary">Price:</strong> ₹
              {course.price}/-
            </p>
            <p>
              <strong className="text-text-primary">Code:</strong> {course.code}
            </p>
            <p>
              <strong className="text-text-primary">Outcome:</strong>{" "}
              {course.outcome}
            </p>
            <p>
              <strong className="text-text-primary">Professor:</strong>{" "}
              {course.professor}
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleEdit(course._id)}
                className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Courses };
