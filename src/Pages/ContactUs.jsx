import React, { useEffect, useState } from "react";
import "../Asset/Css/ContacUs.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import axios from "axios";

const ContactUs = () => {
  const Base_Url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${Base_Url}sendMailContactUsLandingPg`,
        formData
      );
      console.log(response.data);
      if (response.data) {
        alert("We have recieved you form");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <Header></Header>
      <div class="contact-container">
        <div class="row">
          <div class="col-md-6 order-md-2 contact-form">
            <h1>Send us a message</h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setFormData((prevData) => ({ ...prevData, mobile: value }));
                  }}
                  required
                  maxLength={10}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
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
                  required
                ></textarea>
              </div>
              <div class="form-group d-flex justify-content-end">
                <button
                  type="submit"
                  disabled={loading}
                  class="btn btn-lg btn-block btn-primary"
                >
                  {loading ? "Sending...." : "Send Message"}
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
