import React from "react";
import "./Footer.css";
import footerlogo from "../Asset/Images/footer-logo.png";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <div className="footer-section py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* Logo and Description */}
            <div className="col-md-3 info-section">
              <div className="footer-logo d-flex justify-content-start">
                <img src={footerlogo} alt="Logo" className="img-fluid mb-3 " />
              </div>
              <p className="text-white text-start">
                Discover the future of dining with MyFoodMyPrice. Prebook, save
                big, and enjoy your favorite meals at unbeatable prices. Join
                the revolution today.
              </p>
              <div className="footer-social">
              <a href="https://x.com/BiryaniPalayam" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/biryanipalayamErode" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://youtu.be/fqcscOvUXLg" target="_blank"><i class="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/biryani.palayam/" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Explore Links */}
            {/* <div className="col-md-3 d-none d-md-block">
              <h4 className="text-white">Explore</h4>
              <ul className="list-unstyled">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Meet the Farmers</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div> */}

            {/* News Section */}
            {/* <div className="col-md-3 d-none d-md-block">
              <h4 className="text-white">News</h4>
              <div className="footer-news-item">
                <a href="#" className="d-block text-white mb-2">
                  Bringing Food Production Back To Cities
                </a>
                <p>July 5, 2022</p>
              </div>
              <div className="footer-news-item">
                <a href="#" className="d-block text-white mb-2">
                  The Future of Farming, Smart Irrigation Solutions
                </a>
                <p>July 5, 2022</p>
              </div>
            </div> */}

            {/* Contact Information */}
            <div className="col-md-3 text-start">
              <h4 className="text-white">Contact</h4>
              <p className="text-white">
                <i className="fas fa-phone icon-orange"></i> +91 9994210404
              </p>
              <p className="text-white">
                <i className="fas fa-envelope icon-orange"></i> info@biryanipalayam.com
              </p>
              <p className="text-white">
                <i className="fas fa-map-marker-alt icon-orange"></i> No. 1,
                Thayumanasundaram Street, Kollampalayam, Erode, <br />
                Tamil Nadu - 638002
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Middle Area */}
      <div className="footer-middle-area">
        <div className="copyright-text">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                &copy; copyright 2025 by Website Design and build -
                <b>
                  <a
                    href="http://www.Tabsquareinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.Tabsquareinfotech.com
                  </a>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        id="toTopBtn"
        className="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out"
        data-abc="true"
      ></a>
    </footer>
  );
};

export default Footer;
