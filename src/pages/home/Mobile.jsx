import React from "react";
import AppShop from "../../components/ui/AppShop";

const Mobile = () => {
    return (
        <div className="p-12 mb-8">
            <div className="relative">
                <div className="relative pl-6 pr-9 flex justify-between z-10 lg:flex-col lg:items-center lg:justify-end">
                    <div className="w-3/5 flex flex-col justify-center lg:h-5/6 lg:mb-3 lg:w-full">
                        <h3 className="font-medium text-[#8F161A] text-[48px] lg:text-[32px] leading-tight">
                            Artıq Şanlıurfa mətbəxi yeni mobil tətbiqi ilə
                        </h3>
                        <h3 className="font-medium text-[#8F161A] text-[48px] lg:text-[32px] leading-tight mb-10 lg:mb-5">
                            Yükləyin və sifarişə başlayın.
                        </h3>
                        <p className="font-light text-[24px] lg:text-[16px] mb-4 lg:mb-8">
                            Eget etiam scelerisque ac volutpat orci enim ipsum velit. Gravida consectetur enim nunc
                            interdum cras nisl quis. Tempus euismod leo nisl eros pellentesque ipsum et at.
                        </p>
                        <div className="flex items-center lg:justify-center xs:flex-col">
                            <AppShop
                                className={'ml-10 mr-6 lg:mx-1 xs:mb-3'}
                                href={'#'}
                                logo={require('../../assets/img/apple.png')}
                                theme={'white'}
                                name={'App Store'}
                                description={'Download on the'}
                            />
                            <AppShop
                                href={'#'}
                                className={'mr-10 lg:mx-1'}
                                logo={require('../../assets/img/google-play.png')}
                                theme={'black'}
                                name={'Google Play'}
                                description={'Get it on'}
                            />
                            <img src={require("../../assets/img/qr-code.png")} className={'lg:w-[5em]'} />
                        </div>
                    </div>
                    <div className={"mr-7 lg:mr-0 lg:ml-7"}>
                        <img src={require("../../assets/img/phone.png")} className={'lg:h-[25em]'} />
                    </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <div className="h-1/5 lg:h-0"></div>
                    <div className="h-4/5 lg:h-full bg-opaque-red rounded-bl-[35px] rounded-tr-[35px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Mobile