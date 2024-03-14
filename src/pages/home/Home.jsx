import { Link } from "react-router-dom";
import "./Home.css";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="banner-text">
            <div className="heading">
              <h1>lawn renovation flower scaping </h1>
            </div>
            <div className="paragragh">
              <p>
                We provide exceptional landscaping services to a wide range of
                residential properties for over 40 years.
              </p>
            </div>
            <div className="btn-sec">
              <Link to="/about" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="quete">
        <div className="container">
          <div className="sec">
            <h2>
              Check out our list of service for your garden and get free quote
            </h2>
            <div className="btn-sec secb">
              <Link to="/contact" className="btn">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about section  */}
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
