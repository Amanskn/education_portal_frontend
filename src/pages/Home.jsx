import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/courses"); // Navigate to the "/courses" page
  };
  return (
    <div className="bg-background-primary text-text-primary min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to the Education Portal
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          Discover the best courses tailored to enhance your skills and
          knowledge. Join thousands of learners and grow your expertise today!
        </p>
        <button
          onClick={handleRedirect}
          className="bg-accent-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-accent-secondary transition"
        >
          Explore Courses
        </button>
      </section>

      {/* Feature Highlights */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl hover:bg-background-primary transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Expert Instructors</h2>
          <p className="text-text-secondary">
            Learn from industry leaders with years of experience and in-depth
            knowledge.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl hover:bg-background-primary transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Wide Range of Courses</h2>
          <p className="text-text-secondary">
            Choose from a variety of courses in technology, business, design,
            and more.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl hover:bg-background-primary transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Flexible Learning</h2>
          <p className="text-text-secondary">
            Access courses anytime, anywhere, and learn at your own pace.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
        <p className="text-text-secondary mb-6">
          Sign up today and take your first step towards achieving your goals.
        </p>
        <button
          onClick={() => {
            alert("Authentication coming soon");
          }}
          className="bg-accent-primary text-white px-8 py-4 rounded-lg text-lg hover:bg-accent-secondary transition"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
}

export { Home };
