// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const whatsappMessage = `Hello! My name is ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;

    const whatsappNumber = "917003823938";

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <button type="submit" className="btn-accent">Send Message</button>
      </form>


      <div className="contact-links mt-4">
        <p>
          <a href="mailto:pramathapaul8090@gmail.com">pramathapaul8090@gmail.com</a>
        </p>
        <p>
          <a href="tel:+917003823938">+91 70038 23938</a>
        </p>
      </div>
      <div className="contact-image">
        <img src="/white-Photoroom.png" alt="Let's Connect" />
      </div>
    </section>
  );
};

export default Contact;
