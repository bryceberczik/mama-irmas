import "../styles/contact.css";
import BrandLogo from "../images/converted_image.png";
import { useState } from "react";

const Contact = () => {
  const [error, setError] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.toString())) {
      setError("Please enter a valid email address.");
      return;
    }

    formData.append("access_key", "3a33fcad-bb78-48ee-8ce9-96150ea8c07e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setError(""); // Clear error message on success
    }
  };

  return (
    <div className="form-container">
      <div className="contact-container">
        {/* <img src={BrandLogo} alt="Brand Logo" /> */}
        <h1>Let us know your thoughts</h1>
      </div>
      <div className="form-holder">
        <form onSubmit={onSubmit} className="form-edit">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Whats your reason for contacting us?"></textarea>
          </div>
          {error && <span className="error-message">{error}</span>}
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;