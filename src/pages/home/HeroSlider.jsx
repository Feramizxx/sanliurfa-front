import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import useFetchSliderImages from './../../hooks/useFetchSliderImages';
import PageLoader from './../../components/PageLoader';
import { STORAGE_BASE_URL } from "../../api/config";

const HeroSlider = () => {
  const { sliderImages, isSliderImagesLoading, sliderImagesError } = useFetchSliderImages();
  if (isSliderImagesLoading) return <PageLoader />

  return (
    <div>
      <div className="slide-container w-full h-full mt-50">
        {!sliderImagesError ?
          <Slide arrows={false} indicators={true}>
            {sliderImages.map((slideImage) => {
              return (
                <div className="each-slide w-full " key={slideImage.id}>
                  <div
                    className="h-screen w-full bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${STORAGE_BASE_URL + slideImage.imageUrl})` }}
                  />
                </div>
              )
            })}
          </Slide> :
          <div className="w-full h-screen flex items-center justify-center text-xl font-bold">
            <p className="text-red"> Could not load slider images... </p>
          </div>
        }
      </div>
    </div>
  );
};

export default HeroSlider;
