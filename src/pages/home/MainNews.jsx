import React from "react";
import img1 from "../../assets/img/Children.png"
import img2 from "../../assets/img/Hands.png"
import img3 from "../../assets/img/cek.png"


const MainNews = () => {
  return (<>
    <section className="kids-section m-0  p-0">
      <div className="h-96 bg-cover relative bg-center  ">
        <img className="absolute w-full h-full  object-cover mix-blend-overlay" src={img1}/>
        <div className="flex w-full h-full pt-10 pl-10  flex-col items-start  justify-around   " >
          <h1 className="text-white w-3/5 lg:text-2xl text-5xl">
            Doğmalarla birgə keçirilən gün yaddaşlarınıza xüsusi həkk olunur
          </h1>
          <p className="text-white sm:text-xs lg:text-xm  text-xl w-1/2  ">
            Eleifend gravida mattis erat sagittis. Curabitur lacus dolor
            porttitor eu quisque lectus. Amet et amet turpis sit. Sed magna
            feugiat netus ut bibendum malesuada dignissim lectus. Massa quis non
            quis justo.
          </p>
          <button className="text-red font-bold mt-7  bg-white rounded-xl px-10 py-1">Ətraflı</button>
        </div> 
      </div>


      <div className="h-96 second-box bg-cover relative bg-center">
        <img className="absolute w-full h-full  object-cover mix-blend-overlay" src={img2}/>
        <div className="flex w-full h-full pt-10 pr-10  flex-col  items-end   justify-around   " >
          <h1 className="text-white w-3/5 lg:text-2xl text-5xl">
          Uşaqların şərəfinə “ŞanlıUrfa”-da möhtəşəm şou-proqram baş tutacaq!
          </h1>
          <p className="text-white  sm:text-xs lg:text-xm  2xl:text-xl w-1/2 ">
          Augue sed cras sed cursus morbi. Venenatis neque, elementum dolor posuere. Duis viverra praesent sit rhoncus. Sed sit adipiscing vitae semper amet. Sem gravida in nec hendrerit sed vel.
          </p>
          <button className="text-red font-bold mt-7  bg-white rounded-xl px-10 py-1">Ətraflı</button>
        </div> 
      </div>


      <div className="h-96  bg-cover relative bg-center ">
        <img className="absolute w-full h-full  object-cover mix-blend-overlay" src={img3}/>
        <div className="flex w-full h-full pt-10 pl-10  flex-col  items-start   justify-around  " >
          <h1 className="text-white lg:text-2xl text-5xl w-3/5">
          Bütün yollar Bizi Sizə çatdırır!
          </h1>
          <p className="text-white sm:text-xs lg:text-xm  2xl:text-xl w-1/2 ">
          Vel id rhoncus enim et euismod arcu, turpis odio. Amet enim, a semper feugiat lorem pretium sed maecenas. Aliquet ac egestas gravida vitae dui ridiculus neque non at. Tincidunt mi duis vitae donec quis aliquet eleifend. Vulputate volutpat pellentesque integer at at tellus.
          </p>
          <button className="text-red font-bold mt-4 bg-white rounded-xl px-10 py-1">Ətraflı</button>
        </div> 
      </div>
    </section>
    </>
  );
};

export default MainNews;
