import React from "react";
import Nav from "../components/navbar/Nav";
import Services from "../components/Services-section/Services";
import MainSlider from "../components/slider/MainSlider";
import SpecialOffer from "../components/special-offer/SpecialOffer";
const HomePage = () => {
  return (
    <>
      <Nav />
      <MainSlider />
      <Services />
      <SpecialOffer />
    </>
  );
};

export default HomePage;
