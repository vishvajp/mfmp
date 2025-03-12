import React, {useEffect} from "react";
import Header from "../Layout/Header";
import "../Asset/Css/SingleBlog.css";
import { useLocation, useNavigate } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const blog = location.state;
  const navigate = useNavigate()

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
        <div className="row justify-content-center">
          <div className="col-md-8 blog-column">
            <h1 className="blog-title">{blog.blog_heading}</h1>
            <div className="d-flex justify-content-center">
            <img
              src={blog.blog_image_url}
              alt="Chicken Curry"
              className="single-blog-image"
            ></img>
</div>
            <p className="blog-meta text-start">
            {formatDate(blog.created_at)}
            </p>

            <p className="blog-content">{blog.blog_description}</p>

            <div className="text-center mt-4">
              <button onClick={()=> navigate("/blogs")} className="blog-back-button">
                Back to Blogs Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
