import React, { memo } from "react";
import cooker from "../../assets/img/Cooker.png";
import "../../assets/styles/about.css";
import family from "../../assets/img/Vector.png";
import coffe from "../../assets/img/coffeto.png";
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';

const About = memo(() => {
    const { content } = useContext(LanguageContext);

    return (
        <>
            <section className="w-full sm:pt-12">
                <div className="flex about-section1  xl:flex-col  mr-auto ml-auto  items-center justify-between">
                    <div className="w-[616px] mr-0 md:w-full md:h-auto">
                        <img className="w-[716px] h-[716px] mb-32 xl:mb-0 md:w-full md:h-auto" src={cooker} />
                    </div>
                    <div className="w-[50%] xl:w-[100%] px-5  xl:mt-[0px] xl:p-5">
                        <h3 className="text-[20px]  text-red mb-5">{content.pages.about.chap1.title}</h3>
                        <h1 className="text-[32px] leading-8 mb-5">
                            {content.pages.about.chap1.heading}
                        </h1>
                        <p className="text-[16px]">
                            {content.pages.about.chap1.text}
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <div className="h-[230px] w-full mb-[60px] items-center flex" id="marka-divbox">
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                    <div><img src={coffe} /></div>
                </div>
            </section>




            {/*<<<<<<< HEAD*/}
            {/*=======*/}
            {/*      <section className="font-Roboto w-full mb-10">*/}
            {/*        <div className=" about-section2  lg:flex-col  flex  mr-auto ml-auto  items-center flex-row-reverse justify-between ">*/}
            {/*          <div className="w-[50%]">*/}
            {/*            <img className="" src={family} />*/}
            {/*          </div>*/}
            {/*>>>>>>> 5554cbff6590d35ec844318dfffcfef918ca2d32*/}

            <section className="font-Roboto w-full mb-10">
                <div className=" about-section2  flex lg:flex-col  mr-auto ml-auto  items-center flex-row-reverse justify-between ">
                    <div className="w-[700px] h-[600px] md:w-full md:h-auto">
                        <img className="w-[800px] h-[600px] md:w-full md:h-auto" src={family} />
                    </div>
                    <div className="w-[50%] lg:w-[100%] px-5 xl:mt-[0px] xl:p-5  ">
                        <h3 className="text-[20px]  text-red mb-5">{content.pages.about.chap2.title}</h3>
                        <h1 className="text-[32px] leading-8 mb-5">
                            {content.pages.about.chap2.heading}
                        </h1>
                        <p className="text-[16px] mb-20">
                            {content.pages.about.chap2.text}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
})

export default About;
