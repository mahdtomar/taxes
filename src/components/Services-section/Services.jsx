import React from "react";
import ServiceBos from "./ServiceBos";

const Services = () => {
  return (
    <div className="what we provide">
      <div className="container">
        <span>our services</span>
        <h2>what we provide</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque.
        </p>
        <div className="grid-12">
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
          <ServiceBos
            img=""
            title="service title"
            summary="this is a brief summary about the service we provide"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
