import React from "react";
import img1 from "../../assets/img/gridChildren.png";
import "../../assets/styles/news.css"

const InlineNews = () => {
  return (
    <div className="pb-[150px]  pt-[150px] news-container flex flex-row lg:flex-col bg-red ">
      <div className="w-[65%] lg:w-[95%] lg:ml-auto lg:mr-auto ml-[90px] flex flex-col">
      <div >
        <h1 className="mb-5 mt-10 sm:text-[32px] text-white text-[48px]">
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </h1>
        <img className="object-cover w-[976px]" src={img1} />
        <div className="flex flex-wrap pt-3">
          <svg
          className="bg-red mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.8076 0C7.03038 0 7.24404 0.0884998 7.40157 0.24603C7.5591 0.403561 7.6476 0.617218 7.6476 0.84V2.4108H16.668V0.8508C16.668 0.628018 16.7565 0.414361 16.914 0.25683C17.0716 0.0992998 17.2852 0.0108 17.508 0.0108C17.7308 0.0108 17.9444 0.0992998 18.102 0.25683C18.2595 0.414361 18.348 0.628018 18.348 0.8508V2.4108H21.6C22.2363 2.4108 22.8466 2.66349 23.2966 3.11332C23.7467 3.56315 23.9997 4.17329 24 4.8096V21.6012C23.9997 22.2375 23.7467 22.8477 23.2966 23.2975C22.8466 23.7473 22.2363 24 21.6 24H2.4C1.76369 24 1.15342 23.7473 0.703368 23.2975C0.253315 22.8477 0.000318156 22.2375 0 21.6012L0 4.8096C0.000318156 4.17329 0.253315 3.56315 0.703368 3.11332C1.15342 2.66349 1.76369 2.4108 2.4 2.4108H5.9676V0.8388C5.96792 0.616226 6.05656 0.402877 6.21405 0.245606C6.37155 0.0883348 6.58503 -2.27116e-07 6.8076 0V0ZM1.68 9.2904V21.6012C1.68 21.6958 1.69862 21.7894 1.73481 21.8767C1.77099 21.9641 1.82403 22.0435 1.89088 22.1103C1.95774 22.1772 2.03711 22.2302 2.12447 22.2664C2.21182 22.3026 2.30545 22.3212 2.4 22.3212H21.6C21.6946 22.3212 21.7882 22.3026 21.8755 22.2664C21.9629 22.2302 22.0423 22.1772 22.1091 22.1103C22.176 22.0435 22.229 21.9641 22.2652 21.8767C22.3014 21.7894 22.32 21.6958 22.32 21.6012V9.3072L1.68 9.2904ZM8.0004 17.5428V19.542H6V17.5428H8.0004ZM12.9996 17.5428V19.542H11.0004V17.5428H12.9996ZM18 17.5428V19.542H15.9996V17.5428H18ZM8.0004 12.7704V14.7696H6V12.7704H8.0004ZM12.9996 12.7704V14.7696H11.0004V12.7704H12.9996ZM18 12.7704V14.7696H15.9996V12.7704H18ZM5.9676 4.0896H2.4C2.30545 4.0896 2.21182 4.10822 2.12447 4.14441C2.03711 4.18059 1.95774 4.23362 1.89088 4.30048C1.82403 4.36734 1.77099 4.44671 1.73481 4.53407C1.69862 4.62142 1.68 4.71505 1.68 4.8096V7.6116L22.32 7.6284V4.8096C22.32 4.71505 22.3014 4.62142 22.2652 4.53407C22.229 4.44671 22.176 4.36734 22.1091 4.30048C22.0423 4.23362 21.9629 4.18059 21.8755 4.14441C21.7882 4.10822 21.6946 4.0896 21.6 4.0896H18.348V5.2044C18.348 5.42718 18.2595 5.64084 18.102 5.79837C17.9444 5.9559 17.7308 6.0444 17.508 6.0444C17.2852 6.0444 17.0716 5.9559 16.914 5.79837C16.7565 5.64084 16.668 5.42718 16.668 5.2044V4.0896H7.6476V5.1936C7.6476 5.41638 7.5591 5.63004 7.40157 5.78757C7.24404 5.9451 7.03038 6.0336 6.8076 6.0336C6.58482 6.0336 6.37116 5.9451 6.21363 5.78757C6.0561 5.63004 5.9676 5.41638 5.9676 5.1936V4.0896Z"
              fill="white"
            />
          </svg>
          <span className="text-white">13.06.2022</span>
        </div>
        <p className="mt-5 text-white">
          Eget vitae vitae leo gravida porttitor. Urna, viverra quisque eget
          urna eget massa sit consectetur sapien. Dictum lobortis vel vel a
          ornare eget tincidunt eget. In lobortis consectetur tempor lectus.
          Lorem sagittis pellentesque sed sed fringilla volutpat vitae congue
          vel. Id mauris, laoreet sapien gravida lorem odio. Enim augue felis,
          ut augue odio arcu mauris nunc varius. Scelerisque odio vulputate
          ullamcorper erat purus gravida amet. Sed adipiscing maecenas neque
          sagittis pharetra nunc. Sit praesent praesent et cursus. Vel, at
          quisque nulla accumsan auctor duis sollicitudin. Mauris et laoreet
          cursus etiam ut quis gravida feugiat. Venenatis sed sed tempus fames
          pretium. Orci amet fermentum cursus ornare. Orci sapien nisl hac
          lorem. Ac libero nisl, auctor aliquet id convallis eget. Ut aliquam
          rutrum elit vitae rhoncus id vitae cras in. At dignissim venenatis
          amet, vulputate nulla ultrices. Dui, tellus eget vel purus massa, amet
          pellentesque in. Lacinia et sit amet tincidunt ullamcorper. Non neque,
          ullamcorper pellentesque morbi nibh id commodo. Pellentesque massa
          volutpat interdum turpis a, id dictumst sodales. Amet, gravida vel sed
          habitasse semper eget vel et. Ullamcorper diam at nisl, elementum elit
          et. Est, sed est vitae viverra sed diam auctor in cras.
        </p>
      </div>
      </div>
      <div  className="ml-[75px] lg:w-[100%]  lg:ml-0 mt-[100px] ">
        <hr className="border-white p-1" />
        <span className="text-white lg:ml-2 ">Həmçinin Bax</span>
        <div id="news-grid" className=" mt-4  grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-x-2 lg:gap-y-2 gap-y-5 lg:mt-0">
          
          <div className="w-fit  relative " id="grid-Item-container">
            <img className="w-[300px]" src={img1} />
            <a
              className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
              id="grid-item-text"
            >
              Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
            </a>
          </div>
      
          <div className="w-fit  relative " id="grid-Item-container">
            <img className="w-[300px]" src={img1} />
            <a
              className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
              id="grid-item-text"
            >
              Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
            </a>
          </div>
          <div className="w-fit  relative " id="grid-Item-container">
            <img className="w-[300px]" src={img1} />
            <a
              className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
              id="grid-item-text"
            >
              Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
            </a>
          </div>
          <div className="w-fit  relative " id="grid-Item-container">
            <img className="w-[300px]" src={img1} />
            <a
              className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
              id="grid-item-text"
            >
              Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
            </a>
          </div>
          <div className="w-fit  relative " id="grid-Item-container">
            <img className="w-[300px]" src={img1} />
            <a
              className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
              id="grid-item-text"
            >
              Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
            </a>
          </div>
       
     
       
        </div>
      </div>
    </div>
  );
};

export default InlineNews;
