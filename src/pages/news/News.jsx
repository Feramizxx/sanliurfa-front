import React,{useState} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import img1 from "../../assets/img/gridChildren.png";
import img2 from "../../assets/img/gridLovers.png";
import img3 from "../../assets/img/gridHands.png";
import img4 from "../../assets/img/gridPocket.png";
import "../../assets/styles/news.css";




const News = () => {
  const navigate = useNavigate();

  const navigateToinlineNews=()=>{
    navigate('/inlineNews');
  }
  return (


    <section className={'bg-red pt-40 pb-10'}>
    <div className="w-[85%]  mr-auto ml-auto  grid-cols-4 grid-rows-2 grid gap-1"     >
      <div
        onClick={navigateToinlineNews}
        className="w-fit  relative col-span-2 row-span-2"
        id="grid-Item-container"
      >
        <img className="h-[100%] object-cover" src={img1} />
        <a
          className="absolute text-[32px] leading-10 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit col-span-2 relative  row-span-1"
        id="grid-Item-container"
      >
        <img  className="h-[100%] object-cover" src={img2} />
        <a
          className="absolute text-[24px] leading-7 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit col-span-1 pt-[0px] 2xl:pt-[0px] relative row-span-1 "
        id="grid-Item-container"
      >
        <img className="h-[100%] object-cover" src={img3} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit col-span-1 relative pt-[0px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="h-[100%] object-cover"  src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
    </div>


{/*this section have to write  write map */}


  <div id="news-grid-container" className="w-[85%] mt-[50px] ml-auto mr-auto flex flex-col">
    <h1 className="text-white pb-[20px] pt-[40px] text-[32px] md:text-[24px] mb-4">Ən son xəbərlərimiz</h1>
    <div id="news-grid" className="grid   gap-x-5 gap-y-8 grid-cols-4   place-items-center">

    <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
      <div
        className="w-fit  relative pt-[3px] 2xl:pt-[0px] row-span-1"
        id="grid-Item-container"
      >
        <img className="w-fit" src={img4} />
        <a
          className="absolute text-[20px] leading-6 text-white  bottom-0 bg-black  bg-opacity-40 p-7 w-full hover:block "
          id="grid-item-text"
        >
          Ullamcorper sit sollicitudin luctus hendrerit malesuada arcu.
        </a>
      </div>
    </div>
  </div>



    </ section>


  );
};

export default News;
