import React, { useEffect, useState } from "react";
import "../Asset/Css/FirstContent.css";
import briyani from "../Asset/Images/briyani.png";
import prebook1 from "../Asset/Images/prebook1.png";
import bid from "../Asset/Images/bid_save2.png";
import pickUp from "../Asset/Images/pickup3.png";
import appstore from "../Asset/Images/appstore.png";
import playstore from "../Asset/Images/playstore.png";
import phone from "../Asset/Images/phone.png";
import qrcode from "../Asset/Images/qrcode.png";
import banner1 from "../Asset/Images/banner-new.jpg";
import banner2 from "../Asset/Images/BPM-banner2.jpg";
import savemoney from "../Asset/Images/save_money.png";
import prebook from "../Asset/Images/pre-booking.png";
import quality from "../Asset/Images/quality_guaranteed.png";
import pickup from "../Asset/Images/multiple_locations.png";
import chicken from "../Asset/Images/chicken.png";
import menImg from "../Asset/Images/men.png";
import briyani1 from "../Asset/Images/biryani1.png";
import playbtn from "../Asset/Images/bpm-play.gif";
import decor1 from "../Asset/Images/di1.png";
import decor2 from "../Asset/Images/di2.png";
import decor3 from "../Asset/Images/di3.png";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SingleBlog from "./SingleBlog";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FristConten = () => {
  const [allBlogData, setAllBlogData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const Base_Url = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // console.log("Base URL:", Base_Url);
  useEffect(() => {
    const blogData = async () => {
      try {
        const response = await axios.post(`${Base_Url}getBlog`);
        // console.log(response.data.data);
        if (response.data) {
          setAllBlogData(response.data.data.slice(0, 3));
        }
      } catch (err) {
        console.log(err);
      }
    };
    blogData();
  }, [Base_Url]);
  const features = [
    {
      imgSrc: savemoney,
      alt: "Save Money",
      title1: "Save",
      title2: " Money",
      description:
        "Get meals at lowest possible prices through our bidding system.",
    },
    {
      imgSrc: prebook,
      alt: "Convenient Pre-Booking",
      title1: "Convenient ",
      title2: "Pre-Booking",
      description: "Plan ahead and avoid last-minute hassles.",
    },
    {},
    {
      imgSrc: quality,
      alt: "Quality Guaranteed",
      title1: "Quality ",
      title2: "Guaranteed",
      description:
        "Enjoy the same taste, quality, and quantity as in-store purchases.",
    },
    {
      imgSrc: pickup,
      alt: "Multiple Pickup Locations",
      title1: "Multiple Pickup ",
      title2: "Locations",
      description:
        "Enjoy the same taste, quality, and quantity as in-store purchases.",
    },
  ];

  const handleSingleBlog = (blog) => {
    navigate("/blog/details", { state: blog });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Set true if you want navigation arrows
  };

  const formatDate = (dateString) => {
    // Ensure the date string is in the correct format for parsing
    const date = new Date(dateString.replace(" ", "T"));
  
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div>
      <Header className={`header ${visible ? "visible" : "hidden"}`} />

      <div id="home" className="bpm-container">
        {/* Home Banner */}
        <div className="home-banner">
          <Slider {...settings} className="slick-carousel">
            <div className="banner-slide">
              <img src={banner1} className="img-fluid" alt="Slide 1" />
            </div>
            <div className="banner-slide">
              <img src={banner2} className="img-fluid" alt="Slide 2" />
              <button
                className="btn btn-contact-us"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/contact");
              }}
              >
                <b>CONTACT US</b>
              </button>
            </div>
          </Slider>
        </div>

        {/* About Us Section */}
        <div id="about-us" className="about my-5">
          <div className="container my-7">
            <div className="row align-items-center">
              <div className="col-md-3 text-left">
                <h2>
                  <b>ABOUT </b>
                  <br />
                  <span className="text-highlight">MyFoodMyPrice</span>
                </h2>
              </div>
              <div className="col-md-5">
                <img
                  src={briyani}
                  className="img-fluid about-image"
                  alt="About"
                />
              </div>
              <div className="col-md-4">
                <p>
                  Welcome to MyFoodMyPrice, a groundbreaking platform that
                  redefines how you enjoy your favorite meals. By combining the
                  thrill of bidding with the convenience of prebooking, we offer
                  an unmatched dining experience at unbeatable prices. Our
                  mission is to make quality food accessible and affordable
                  while supporting restaurants in optimizing their operations.
                  Whether you're a savvy diner looking to save big or a
                  restaurant aiming to maximize efficiency, MyFoodMyPrice is
                  your go-to solution for smart dining.
                </p>
              </div>
            </div>

            <img
              src={decor1}
              class="decor-image decor-image-1"
              alt="Decorative Image 1"
            ></img>
            <img
              src={decor2}
              class="decor-image decor-image-2"
              alt="Decorative Image 2"
            ></img>
            <img
              src={decor3}
              class="decor-image decor-image-3"
              alt="Decorative Image 3"
            ></img>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="how-it-works-main">
          <div className="container how-it-works">
            <h2 className="text-center">
              HOW <span className="text-highlight">MyFoodMyPrice</span> WORKS
            </h2>
            <p class="text-center hiwpa">
              MyFoodMyPrice revolutionizes the dining experience with two
              innovative prebooking options. First, the Fixed Price Prebooking
              allows you to secure your favorite dishes at discounted rates,
              ensuring you get great value every time. Second, our Bidding
              Prebooking option lets you bid on meals, giving you the chance to
              enjoy even lower prices. Simply browse the app, choose your
              preferred option, prebook your meal, and pick it up at your
              convenience. It's a win-win for both customers and restaurants,
              ensuring zero wastage and guaranteed savings.
            </p>
            <div className="container-inside p-4">
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="how-it-works-card left-card">
                    <img src={prebook1} className="img-fluid" alt="Pre-Book" />
                    <h3>Pre-Book</h3>
                    <p>Choose your meal and desired pickup time.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-it-works-card middle-card">
                    <img src={bid} className="img-fluid" alt="Bid & Save" />
                    <h3>Bid & Save</h3>
                    <p>
                      Participate in our unique bidding system and raise the
                      price from the current price. If you are in the top 5% of
                      bids, your order is confirmed.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-it-works-card right-card">
                    <img src={pickUp} className="img-fluid" alt="Pick Up" />
                    <h3>Pick Up</h3>
                    <p>Collect your meal at your chosen time and location.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-1  ">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.biryanipalayam.myfoodmyprice&amp;pli=1"
              class="btn btn-orange"
            >
              DOWNLOAD THE APP
            </a>
            </div>
         
          </div>
        </div>

        {/* Call To Action */}
        <div id="call-to-action" className="call-to-action-section py-lg-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 text-white">
                <h2>
                  Ready to Save Big on Your <br />
                  <span className="highlight highlight-large">
                    Favorite Meals?
                  </span>
                </h2>
                <p>
                  Download{" "}
                  <span className="highlight highlight-small">
                    MyFoodMyPrice
                  </span>{" "}
                  today and <br></br>
                  start enjoying exclusive discounts.
                </p>
                <div className="app-download-buttons mt-3">
                  <a href="#">
                    <img src={appstore} alt="App Store" className="img-fluid" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.biryanipalayam.myfoodmyprice">
                    <img
                      src={playstore}
                      alt="Google Play"
                      className="img-fluid"
                    />
                  </a>
                  <a href="">
                    <img
                      src={qrcode}
                      alt="QR Code for Google Play"
                      class="qr img-fluid"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={phone}
                  alt="App on Phone"
                  class="phone-image img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="why-choose-section py-lg-5">
          <div className="container">
            <h2 className="text-center">
              WHY CHOOSE <span className="highlight">MyFoodMyPrice?</span>
            </h2>
            <p className="text-center">
            Choosing MyFoodMyPrice means embracing a smarter way to dine. Our platform offers unparalleled savings through prebooking, making quality meals affordable for everyone. The unique bidding system adds excitement to your dining experience, allowing you to control the price you pay. For restaurants, MyFoodMyPrice provides predictable sales and reduces food wastage, ensuring more efficient operations. Join the growing community of savvy diners and innovative restaurants transforming the food industry with MyFoodMyPrice.
            </p>
            <div className="row justify-content-center mt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`col-md-2 mb-2 col-6 d-flex ${
                    index === 0 ? "left-most-card" : ""
                  } ${index === features.length - 1 ? "right-most-card" : ""} ${index === 2 ? "d-none d-md-block" : ""}`}
                >
                  {index === 2 ? (
                    <div className="feature-card text-center p-3 highlighted-card "></div>
                  ) : (
                    <div className="feature-card text-center p-3">
                      <div className="d-flex align-items-start">
                        <img
                          src={feature.imgSrc}
                          alt={feature.alt}
                          className="img-fluid mb-2"
                        />
                      </div>
                      <h4>
                        {feature.title1} <br></br> {feature.title2}
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <img
              src={chicken}
              alt="Food"
              className="img-fluid chicken-image position-absolute"
            />
          </div>
        </div>

        <div id="testimonials" className="testimonials-section pt-5 pb-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 align-items-center justify-content-center mb-5">
                <div className="how-to-use-header">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 d-flex text-start how-to-use-text">
                        <h2>HOW TO USE</h2>
                        <h1>MyFoodMyPrice</h1>
                      </div>
                      <div className="col-md-3 d-flex align-items-center play-button">
                        <img
                          src={playbtn}
                          alt="Play Button"
                          className="img-fluid"
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 text-left text-light mb-4 mt-5">
            <h2>
              <b>WHAT </b><span className="highlight">OUR USERS SAY</span>
            </h2>
          </div> */}
              {/* <div className="col-12 d-flex justify-content-start mt-4">
            <div className="col-8">
              <Slider {...settings} className="testimonial-carousel u-slick u-slick--gutters-1">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-item js-slide d-inline-block">
                    <div className="testimonial-content">
                      <div className="quo-rating d-flex">
                        <img
                          src={testimonial.face}
                          alt={`Face ${index + 1}`}
                          className="img-fluid rounded mb-2"
                        />
                        <div className="rating mb-2">{testimonial.rating}</div>
                        <img
                          src={testimonial.icon}
                          alt={`User ${index + 1}`}
                          className="img-fluid rounded-circle mb-2"
                        />
                      </div>
                      <p>{testimonial.text}</p>
                      <div className="names-pos text-end">
                        <h4>{testimonial.name}</h4>
                        <p className="position">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div> */}
            </div>
          </div>
        </div>
        <div id="gallery-section" className="gallery-section py-lg-5">
          <div className="container">
            <h2 class="text-center mb-4">BLOG</h2>
            <div className="row">
              {allBlogData?.map((sinblog, index) => (
                <div className="col-12 col-lg-4 mb-2" key={index}>
                  <div className="d-flex flex-column first-content-blog-div p-3 h-100">
                    <img
                      src={sinblog.blog_image_url}
                      className="blog-image mb-2"
                    ></img>
                    <h5 class="card-title">
                      <strong>{sinblog.blog_heading}</strong>
                    </h5>
                    <p className="text-start">
                      {sinblog.blog_description
                        .split(" ")
                        .slice(0, 11)
                        .join(" ") + "..."}
                    </p>
                    <p class="text-muted small">{formatDate(sinblog.created_at)}</p>
                    <div>
                      <button
                        class="btn first-content-blog-learn-btn"
                        onClick={() => handleSingleBlog(sinblog)}
                      >
                        Learn More <i class="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end mt-5">
              <button
                className="btn first-content-blog-learn-btn "
                onClick={() => navigate("/blogs")}
              >
                Click here to see more blogs..
              </button>
            </div>
          </div>
        </div>
        <div id="contact-us" className="investor-section pt-0 pb-0">
          <div className="container">
            <div className="row align-items-end">
              {/* Left side with businessman image */}
              <div className="col-md-3 text-center text-md-left">
                <img
                  src={menImg}
                  alt="Businessman"
                  className="img-fluid businessman"
                />
              </div>
              {/* Middle side with text and button */}
              <div className="col-md-5 text-center text-md-start mb-3">
                <h2 className="text-highlight">
                  LOOKING TO <span className="text-white">INVEST?</span>
                </h2>
                <p className="text-white">
                Be part of the next big thing in food tech by investing in MyFoodMyPrice. Our Franchisee Invested Company Operated (FICO) model allows you to benefit from passive income while we handle all operations, from marketing to customer management. With low investment options and the potential for high returns, MyFoodMyPrice is expanding rapidly across India and internationally. Partner with us and help bring this revolutionary platform to new cities, supporting local restaurants and transforming the dining experience for customers.
                </p>
                <button
                  className="btn btn-orange"
                  onClick={() => navigate("/contact")}
                >
                  CONTACT US
                </button>
              </div>
              {/* Right side with biryani image */}
              <div className="col-md-4 d-none d-md-block text-right">
                <img
                  src={briyani1}
                  alt="Biryani"
                  className="img-fluid biryani"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="p-4">
          <button
            className="btn-close"
            onClick={() => setShowModal(false)}
            style={{ position: "absolute", right: "10px", top: "10px" }}
          />
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/fqcscOvUXLg"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FristConten;
