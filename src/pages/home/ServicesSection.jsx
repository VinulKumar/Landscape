import React, { useState } from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  // Define your services data as an array of objects
  const [services] = useState([
    {
      img: "../src/assets/lanscaping.jpg",
      title: "Landscaping",
      description:
        "We offer expert landscaping services to transform your outdoor spaces into beautiful and functional environments.",
    },
    {
      img: "../src/assets/Hardscaping.jpg",
      title: "Hardscaping",
      description:
        "Our hardscaping services include the installation of patios, walkways, and other durable features to enhance your outdoor living areas.",
    },
    {
      img: "../src/assets/Lawn Care.jpg",
      title: "Lawn Care",
      description:
        "Keep your lawn healthy and vibrant with our comprehensive lawn care services, including mowing, fertilizing, and weed control.",
    },
  ]);

  return (
    <div className="services-section">
      <div className="container">
        <div className="heading text-center">
          <h2>Our Services</h2>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="src-img">
                <img src={service.img} alt="" className="img-fluid" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
