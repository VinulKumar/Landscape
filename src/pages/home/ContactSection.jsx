import "./Home.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="container heading text-center">
        <h2>Contact Us</h2>
        <div className="">
          <form>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info text-center">
            <div className="icon">
              <HiOutlineMail />
            </div>
            <span>Email</span>
            <p>info@example.com</p>
          </div>
          <div className="info text-center">
            <div className="icon">
              <IoLocationSharp />
            </div>
            <span>Address</span>
            <p>1234 Main Street, City, Country</p>
          </div>
          <div className="info text-center">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <span>Phone</span>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
