import React from "react";

const ServiceBos = (props) => {
  return (
    <div className="service-box">
      <img src={props.img} alt="service icon" />
      <div>
        <span>{props.title}</span>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

export default ServiceBos;
