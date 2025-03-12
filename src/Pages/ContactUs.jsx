import React, { useEffect, useState } from "react";
import "../Asset/Css/ContacUs.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    to_name: "MFMP Team", // Default recipient name
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
        "service_6mp18m8",   // Replace with your EmailJS Service ID
        "template_04qfshl",  // Replace with your EmailJS Template ID
        formData,
        "8J_bUEsWOCpjzHV4P"    // Replace with your EmailJS Public Key
    )
    .then(response => {
        alert("Email sent successfully!");
        setFormData({ to_name: "MFMP Team", from_name: "", from_email: "", message: "" }); // Reset form
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
    });
};

  return (
    <div>
      <Header></Header>
      <div class="contact-container">
        <div class="row">
          <div class="col-md-6 order-md-2 contact-form">
            <h1>Send us a message</h1>
            <form
              onSubmit={handleSubmit}
            >
              <div class="form-group">
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.from_name} 
                  onChange={handleChange} 
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="from_email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.from_email} 
                onChange={handleChange} 
                  required
                ></input>
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Message"
                  class="form-control"
                  name="message"
                  value={formData.message} 
                onChange={handleChange}
                  rows="4"
                  require
                ></textarea>
              </div>
              <div class="form-group d-flex justify-content-end">
                <button
                  type="submit"
                
                  class="btn btn-lg btn-block btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-6 order-md-1 contact-info">
            <h1>CONTACT US</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <ul>
              <li>
                <i class="fas fa-map-marker-alt"></i> No. 1, Thayumanasundaram
                Street, Kollampalayam, Erode, Tamil Nadu - 638002
              </li>
              <li>
                <i class="fas fa-phone"></i> +91 9994210404
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:info@biryanipalayam.com">
                  info@biryanipalayam.com
                </a>
              </li>
              <li>
                <i class="fas fa-globe"></i>
                <a href="https://myfoodmyprice.com" target="_blank">
                  myfoodmyprice.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
