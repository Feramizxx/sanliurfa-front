import React from "react";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../assets/img/Hamburger.png";
import img2 from "../../assets/img/Salad.png";
import img3 from "../../assets/img/Deliver.png";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];
const HeroSlider = () => {
  return (
    <div>
      <div className="slide-container w-full h-full mt-50">
        <Slide arrows={false} indicators={true}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide object-fit w-full " key={index}>
              <div
                className="h-[100vh] bg-no-repeat  bg-cover relative"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default HeroSlider;
