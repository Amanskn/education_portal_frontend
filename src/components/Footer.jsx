function Footer() {
  return (
    <footer className="bg-background-secondary text-text-primary p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 text-center">
        <h3 className="text-lg font-semibold">
          Education Portal - Empowering Learning
        </h3>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Education Portal. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-accent-primary hover:text-accent-secondary transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-accent-primary hover:text-accent-secondary transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-accent-primary hover:text-accent-secondary transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
