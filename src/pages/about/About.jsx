import React from "react";
import cooker from "../../assets/img/Cooker.png";
import "../../assets/styles/about.css";
import family from "../../assets/img/Vector.png";
import coffe from "../../assets/img/coffeto.png";

const About = () => {
  return (
    <>
      <section className="font-Roboto w-full">
        <div className="flex about-section1  xl:flex-col  mr-auto ml-auto  items-center justify-between">
            <div className="w-[616px] mr-0 "><img className="w-[716px] h-[716px] mb-32 xl:mb-0 " src={cooker} /></div>
          

          <div className="w-[50%] xl:w-[100%] px-5  xl:mt-[0px] xl:p-5">
            <h3 className="text-[20px]  text-red mb-5">Missiyamız</h3>
            <h1 className="text-[32px] leading-8 mb-5">
              Phasellus risus lorem dignissim arcu. Viverra ut magna eu enim
              tellus.
            </h1>
            <p className="text-[16px]">
              Ut risus neque praesent amet elementum nunc, non pharetra egestas.
              Vitae amet maecenas pellentesque donec molestie posuere dui
              feugiat lacus. Cursus tortor adipiscing curabitur sit blandit.
              Lacus urna ut dictumst maecenas volutpat faucibus pellentesque. Id
              pretium, justo, in nunc eu morbi pharetra felis. Eros, tellus eu
              eget egestas at egestas. Phasellus risus lorem dignissim arcu.
              Viverra ut magna eu enim tellus. Amet consectetur id id ut in eu.
              Faucibus laoreet non maecenas semper sollicitudin magna morbi.
              Amet, euismod pulvinar metus senectus. Pellentesque et interdum
              quam lectus porttitor senectus mauris quis. Lorem elementum
              aliquam sit eleifend mattis. Non aliquet id magna non ornare in
              ullamcorper mattis fringilla. Nullam eleifend faucibus ultrices
              faucibus pellentesque congue. Egestas arcu, laoreet pellentesque
              tincidunt rhoncus. Nibh ultrices eget netus morbi nullam. Nisl
              egestas vitae massa nibh tristique fringilla sem tellus, donec.
              Bibendum eu pretium ipsum sit. Aenean sed convallis sed vel est
              magna.
            </p>
          </div>
        </div>
      </section>


<section>
    <div className="h-[230px] w-full mb-[60px] items-center flex" id="marka-divbox">
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
        <div><img src={coffe}/></div>
    </div>
</section>





      <section className="font-Roboto w-full mb-10">
        <div className=" about-section2  flex lg:flex-col  mr-auto ml-auto  items-center flex-row-reverse justify-between ">
          <div className="w-[700px] h-[600px]">
            <img className="w-[800px] h-[600px]" src={family} />
          </div>

          <div className="w-[50%] lg:w-[100%] px-5 ml-5 xl:mt-[0px] xl:p-5  ">
            <h3 className="text-[20px]  text-red mb-5">Missiyamız</h3>
            <h1 className="text-[32px] leading-8 mb-5">
              Phasellus risus lorem dignissim arcu. Viverra ut magna eu enim
              tellus.
            </h1>
            <p className="text-[16px] mb-20">
              Restoran müştəri xidməti restoranlar tərəfindən nahar edənlərə
              göstərilən xidmət və qayğıdır. Bu, həqiqi yemək təcrübəsindən
              tutmuş bugünkü restoranların sadiqlik proqramları və digər
              strategiyalarla həyata keçirdiyi uzunmüddətli əlaqələr qurmağa
              qədər hər şeyi əhatə edə bilər. Restoranlar təqdim etdikləri
              xidmətlə yaşayıb öldüyünə görə, restoranda müştərilərlə birbaşa
              əlaqə saxlayan hər bir işçiyə restoran müştəri xidməti təlimi
              verilməlidir. Bunu etmək, daha çox geri qayıdan qonaqlar və sosial
              mediada və rəy saytlarında parlaq rəylərlə nəticələnə bilər.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
