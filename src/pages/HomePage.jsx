import React from "react";
import Nav from "../components/navbar/Nav";
import Services from "../components/Services-section/Services";
import MainSlider from "../components/slider/MainSlider";
const HomePage = () => {
  return (
    <>
      <Nav />
      <MainSlider />
      <Services />
    </>
  );
};

export default HomePage;
