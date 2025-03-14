import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "../Asset/Css/AllBlogs.css"

const AllBlogs = () => {
  const Base_Url = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [allBlogData, setAllBlogData] = useState(null);
  const [pagination, setPagination] = useState(null);
  const handleSingleBlog = (blog) => {
    
    navigate("/blog/details", { state: blog });
  };

   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  useEffect(() => {
    const blogData = async () => {
      window.scrollTo(0, 0);
      try {
        const response = await axios.post(`${Base_Url}getBlog`, {
          per_page: 5,
        });
        // console.log(response.data.data, response.data.pagination);
        if (response.data) {
          setAllBlogData(response.data.data);
          setPagination(response.data.pagination);
        }
      } catch (err) {
        console.log(err);
      }
    };
    blogData();
  }, [Base_Url]);

  const handlePreview = async () => {
    window.scrollTo(0, 0);
    if (pagination?.prev_page_url) {
      try {
        const response = await axios.post(pagination.prev_page_url);
        if (response.data) {
          setAllBlogData(response.data.data);
          setPagination(response.data.pagination);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleNext = async () => {
    if (pagination?.next_page_url) {
      try {
        const response = await axios.post(pagination.next_page_url);
        if (response.data) {
          setAllBlogData(response.data.data);
          setPagination(response.data.pagination);
        }
      } catch (err) {
        console.log(err);
      }
    }
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
      <Header></Header>
      
      <div className="blog-container">
      {allBlogData ?   <div>
        <div className="row">
          {allBlogData?.map((sinblog, index) => (
            <div className="col-12 col-lg-4 mb-2" key={index}>
              <div className="d-flex flex-column first-content-blog-div h-100 p-3">
                <img
                  src={sinblog.blog_image_url}
                  className="blog-image mb-2"
                ></img>
                <h5 class="card-title">
                  <strong>{sinblog.blog_heading}</strong>
                </h5>
                <p className="text-start">
                  {sinblog.blog_description.split(" ").slice(0, 11).join(" ") +
                    "..."}
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
        <div className="d-flex justify-content-end gap-2">
        {pagination?.prev_page_url &&  <button
          
          onClick={handlePreview}
          className="first-content-blog-learn-btn"
        >
        <IoArrowBackCircleOutline className="blog-back-icon" />
        Previous
        </button>}
         
          {pagination?.next_page_url &&  <button
          className="first-content-blog-learn-btn"
           
            onClick={handleNext}
          >
          <IoArrowForwardCircleOutline className="blog-back-icon" />  Next
          </button>}
         
        </div>
      </div> : 
      <div className="d-flex justify-content-center">
  <Spinner animation="border" variant="primary" />
      </div>
      }
     
      </div>
    </div>
  );
};

export default AllBlogs;
