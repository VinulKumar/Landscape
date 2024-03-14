import React from "react";
import AboutImg from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <section className="about-sec">
        <div className="container">
          <div className="about-div">
            <div className="left-img">
              <img src={AboutImg} alt="About image" className="img-fluid" />
            </div>
            <div className="right-cont">
              <div className="heading">
                <p className="sub-title">About Our Company</p>
                <h2>
                  We Can Create an Environment That’s Beyond Your Imagination
                </h2>
                <p className="dec">
                  Landscaping is the art and science of enhancing the beauty and
                  functionality of outdoor spaces. From designing lush gardens
                  and manicured lawns to installing hardscape features like
                  patios and walkways, landscaping transforms ordinary
                  landscapes into stunning and functional environments. Whether
                  creating tranquil retreats or vibrant gathering spaces,
                  professional landscapers utilize their expertise in plant
                  selection, soil management, and design principles to craft
                  outdoor spaces that reflect the unique preferences and
                  lifestyles of their clients.
                </p>
                <div className="btn-sec">
                  <Link to="/contact" className="btn">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
