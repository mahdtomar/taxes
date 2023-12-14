import React from "react";
import sectionImg from "../../assets/images/special-offer.jpg";
import stockicon from "../../assets/icons/ChartBar.svg";
import files from "../../assets/icons/Files.svg";
import "./scss/specialoffer.css";
const SpecialOffer = () => {
  return (
    <div className="special-offer">
      <div className="container flex-2">
        <img src={sectionImg} alt="" />
        <div>
          <span className="fancy-text">special offer</span>
          <h3>our process</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            tenetur vitae in adipisci animi sapiente ipsum totam mollitia
            doloribus culpa.
          </p>
          <div className="offer-point flex-2">
            <div className="img">
              <img src={stockicon} alt="" />
            </div>
            <div className="flex-2-v">
              <span>business strategy</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolore, nostrum hic fuga harum architecto vitae ipsa
                ipsam assumenda
              </p>
            </div>
          </div>
          <div className="offer-point flex-2">
            <div className="img">
              <img src={files} alt="" />
            </div>
            <div className="flex-2-v">
              <span>insurance planning</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolore, nostrum hic fuga harum architecto vitae ipsa
                ipsam assumenda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
