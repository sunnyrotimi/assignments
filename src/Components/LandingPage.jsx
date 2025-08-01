import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">E-Voting System</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="/home" className="hover:text-yellow-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-yellow-300">
                    About
                  </a>
                </li>

                <li>
                  <a href="/contact" className="hover:text-yellow-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="bg-yellow-400 text-black px-3 py-1 rounded-lg hover:bg-yellow-300"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="flex-1 bg-gray-100 flex flex-col justify-center items-center text-center p-10"
        >
          <h2 className="text-4xl font-bold mb-4">
            Secure & Transparent Online Voting
          </h2>
          <p className="text-lg max-w-2xl mb-6">
            Participate in free and fair elections anytime, anywhere with our
            reliable e-voting platform.
          </p>
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-12 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">E-Voting Platform</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Our e-voting platform ensures secure, transparent, and efficient
              elections. Administrators can create and manage elections, while
              voters can easily register, log in, and cast their votes with
              confidence.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4">
          <p>
            © {new Date().getFullYear()} E-Voting System. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
