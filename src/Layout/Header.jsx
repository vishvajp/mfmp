import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import logo from "../Asset/Images/MFMP-logo-1.jpg";


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true)

  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
    className={`navbar navbar-expand-lg navbar-light fixed-top ${
      visible ? "visible-navbar" : "hidden-navbar"
    }`}
    >
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "65px" }} // Adjust height if needed
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#home"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const aboutSection = document.getElementById("home");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#about-us"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const aboutSection = document.getElementById("about-us");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100); // Delay scrolling to allow page load
              }}
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const howItWorksSection =
                    document.getElementById("how-it-works");
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              HOW IT WORKS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#call-to-action"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const howItWorksSection =
                    document.getElementById("call-to-action");
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              MOBILE APPS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const howItWorksSection =
                    document.getElementById("testimonials");
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              HOW TO
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="https://franchise.myfoodmyprice.com/"
            >
              FRANCHISE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#gallery-section"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const howItWorksSection =
                    document.getElementById("gallery-section");
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  const howItWorksSection =
                    document.getElementById("contact-us");
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <a
          className="btn btn-downloadtheapp"
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.google.com/store/apps/details?id=com.biryanipalayam.myfoodmyprice&pli=1"
        >
          DOWNLOAD THE APP
        </a>
        <a
          href="https://wa.me/919994210404?text=Hi,%20I%20am%20interested%20to%20learn%20more%20about%20MyFoodMyPrice"
          className="btn btn-whatsapp ml-2"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
