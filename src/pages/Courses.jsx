import { StatusCodes } from "http-status-codes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

function Courses() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Fetch courses from the API
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    fetch(`${apiUrl}/courses`)
      .then((response) => response.json())
      .then((data) => setCourses(data.data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  // Handle Delete
  const handleDelete = (id) => {
    fetch(`${apiUrl}/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === StatusCodes.OK) {
          setMessage("Course deleted successfully!");
          fetchCourses();
        } else {
          setMessage("Failed to delete the course.");
        }
      })
      .catch((error) => console.error("Error deleting course:", error));
  };

  // Handle Edit
  const handleEdit = (courseId) => {
    console.log(courseId);
    console.log("AAAAAAAAA", `/edit-course/${courseId}`);
    navigate(`/edit-course/${courseId}`);
  };

  // Handle Update Submission
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/courses/${editingCourse.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingCourse),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage("Course updated successfully!");
          fetchCourses();
          setEditingCourse(null); // Reset editing state
        } else {
          setMessage("Failed to update the course.");
        }
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Manage Courses</h1>
      {message && <p className="text-lg text-green-500 mb-4">{message}</p>}

      {editingCourse ? (
        <form onSubmit={handleUpdateSubmit} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Course Name</label>
              <input
                type="text"
                value={editingCourse.name}
                onChange={(e) =>
                  setEditingCourse({ ...editingCourse, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Duration</label>
              <input
                type="text"
                value={editingCourse.duration}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    duration: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Price</label>
              <input
                type="text"
                value={editingCourse.price}
                onChange={(e) =>
                  setEditingCourse({ ...editingCourse, price: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Code</label>
              <input
                type="text"
                value={editingCourse.code}
                onChange={(e) =>
                  setEditingCourse({ ...editingCourse, code: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Outcome</label>
              <input
                type="text"
                value={editingCourse.outcome}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    outcome: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Professor</label>
              <input
                type="text"
                value={editingCourse.professor}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    professor: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Update Course
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="p-4 border border-gray-200 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold">{course.name}</h2>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Price:</strong> {course.price}
              </p>
              <p>
                <strong>Code:</strong> {course.code}
              </p>
              <p>
                <strong>Outcome:</strong> {course.outcome}
              </p>
              <p>
                <strong>Professor:</strong> {course.professor}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(course._id)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Courses };
