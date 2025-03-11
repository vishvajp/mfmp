import React,{useEffect} from 'react'
import "../Asset/Css/ContacUs.css"
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Header></Header>
        <div class="contact-container">
        <div class="row">
            <div class="col-md-6 order-md-2 contact-form">
                <h1>Send us a message</h1>
                <form target="_blank" action="https://myfoodmyprice.com/contact/send" method="POST">
                    <div class="form-group">
                        <input type="text" name="name" class="form-control" placeholder="Name" required=""></input>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" class="form-control" placeholder="Email" required=""></input>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Message" class="form-control" name="message" rows="4" required=""></textarea>
                    </div>
                    <div class="form-group d-flex justify-content-end">
                        <button type="submit" name="submitContact" class="btn btn-lg btn-block btn-primary">Send
                            Message</button>
                    </div>
                </form>
            </div>
            <div class="col-md-6 order-md-1 contact-info">
                <h1>CONTACT US</h1>
                <p>We're open for any suggestion or just to have a chat</p>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> No. 1, Thayumanasundaram Street,
    Kollampalayam, Erode, Tamil Nadu - 638002</li>
                    <li><i class="fas fa-phone"></i> +91 9994210404</li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:info@biryanipalayam.com">info@biryanipalayam.com</a></li>
                    <li><i class="fas fa-globe"></i><a href="https://myfoodmyprice.com" target="_blank">myfoodmyprice.com</a></li>
                </ul>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default ContactUs