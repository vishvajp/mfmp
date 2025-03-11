import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Layout/Header';
import FristConten from './Pages/FristConten';
import Footer from './Layout/Footer';
import SingleBlog from './Pages/SingleBlog';
import AllBlogs from './Pages/AllBlogs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="App">   
     <Routes>
      <Route path='/' element={ <FristConten></FristConten>}></Route>
      <Route path="/blog/details" element={<SingleBlog></SingleBlog>}></Route>
      <Route path="/blogs" element={<AllBlogs></AllBlogs>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
