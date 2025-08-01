import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have questions about the E-Voting System? Fill out the form or reach us
        using the contact details.
      </p>

      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>📞 Contact Info</h2>
          <p><strong>Email:</strong> support@evoting.com</p>
          <p><strong>Phone:</strong> +234 808 327 4745</p>
          <p><strong>Address:</strong> 13 Aye Bus Stop, Isolo, Lagos, Nigeria</p>

          <h2 style={{ marginTop: "20px" }}>🌐 Follow Us</h2>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
