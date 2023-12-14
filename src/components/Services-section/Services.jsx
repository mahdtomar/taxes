import React from "react";
import ServiceBos from "./ServiceBos";
import icon from "../../assets/icons/calenderCheck.svg";
import "./scss/services.css";
const Services = () => {
  return (
    <div className="what-we-provide">
      <div className="container">
        <span className="fancy-text">our services</span>
        <h2>what we provide</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque.
        </p>
        <div className="container grid-12">
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img={icon}
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
