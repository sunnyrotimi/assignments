import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About E-Voting System</h1>
      <p className="about-text">
        Our E-Voting System is a secure, transparent, and easy-to-use platform
        designed to conduct elections online. It ensures every eligible voter
        can register, log in, and cast their vote conveniently from anywhere.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h2>🔒 Secure Voting</h2>
          <p>
            Advanced authentication and encryption methods ensure every vote is
            safe and unique.
          </p>
        </div>

        <div className="about-card">
          <h2>📊 Real-Time Results</h2>
          <p>
            Votes are counted instantly, providing real-time election results
            after voting ends.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Easy Access</h2>
          <p>
            Voters can register, log in, and cast their votes from any location
            with internet access.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <p>
          Our goal is to make elections fair, transparent, and accessible to
          everyone while ensuring security and integrity in the voting process.
        </p>
      </div>
    </div>
  );
};

export default About;
