import React from "react";
import "./scss/mainslider.css";
import hk1 from "../../assets/images/HK (1).jpg";
import hk2 from "../../assets/images/HK (2).jpg";
// import hk3 from "../../assets/images/HK (3).jpg";
// import hk4 from "../../assets/images/HK (4).jpg";
// import hk5 from "../../assets/images/HK (5).jpg";
// import hk6 from "../../assets/images/HK (6).jpg";

const MainSlider = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const sliderImages = [hk1, hk2, hk3, hk4, hk5, hk6];
  // const sliderImages = [hk1, hk2];
  //   const [imagesArray, setImagesArray] = useState(sliderImages);
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       // Move to the next slide, or loop back to the first slide if at the end
  //       setCurrentSlide((prevSlide) => prevSlide + 1);
  //       const rotatedArray = [...imagesArray.slice(1), imagesArray[0]];
  //       setImagesArray(rotatedArray);
  //       let slide = document.querySelector(".slide");
  //       rotatedArray.forEach((element, i) => {
  //         let imgNode = document.createElement("img");
  //         imgNode.src = element;
  //         imgNode.setAttribute("key", i);
  //         imgNode.setAttribute("alt", i);
  //         slide.appendChild(imgNode);
  //       });
  //     }, 1000); // Change the slide every 5 seconds

  //     // Cleanup the interval on component unmount
  //     return () => clearInterval(intervalId);
  //   });
  function swapimages() {
    const time = setInterval(() => {
      const images = document.querySelector(".slide").children;
      Array.from(images).map((img) => {
        switch (img.classList[0]) {
          case "in":
            img.className = "before";
            setTimeout(() => {
              console.log("timeout from" + img);
              img.classList.add("hide");
              img.classList.remove("before");
              img.classList.add("after");
              img.classList.remove("hide");
              clearInterval(time);
              setTimeout(swapimages(), 2500);
            }, 2500);
            break;
          case "before":
            img.className = "after";
            setTimeout(() => {
              console.log("timeout from" + img);
              img.classList.add("hide");
              img.classList.remove("before");
              img.classList.add("after");
              img.classList.remove("hide");
            }, 2500);
            break;
          case "after":
            img.className = "in";
            break;
          default:
            break;
        }
        return "";
      });
    }, 5000);
  }
  swapimages();
  return (
    <div className="slider container">
      <div
        className="slide"
        // style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        <img src={hk1} className="after" alt="" />
        <img src={hk2} className="in" alt="" />
      </div>
      <div className="container grid-12">
        <article>
          <h1>this is a main title!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium asperiores, error voluptate doloribus repellendus quis
            itaque quos explicabo eveniet aperiam.
          </p>
        </article>
      </div>
    </div>
  );
};

export default MainSlider;
