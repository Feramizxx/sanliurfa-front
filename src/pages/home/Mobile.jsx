import React from "react";
import AppShop from "../../components/ui/AppShop";

const Mobile = () => {
    return (
        <div className="p-12 mb-8">
            <div className="relative">
                <div className="relative pl-6 pr-9 flex justify-between z-10">
                    <div className="w-3/5 flex flex-col justify-center">
                        <h3 className="font-medium text-[#8F161A] text-[48px] leading-tight">
                            Artıq Şanlıurfa mətbəxi yeni mobil tətbiqi ilə
                        </h3>
                        <h3 className="font-medium text-[#8F161A] text-[48px] leading-tight mb-10">
                            Yükləyin və sifarişə başlayın.
                        </h3>
                        <p className="font-light text-[24px] mb-4">
                            Eget etiam scelerisque ac volutpat orci enim ipsum velit. Gravida consectetur enim nunc
                            interdum cras nisl quis. Tempus euismod leo nisl eros pellentesque ipsum et at.
                        </p>
                        <div className="flex items-center">
                            <AppShop
                                className={'ml-10 mr-6'}
                                href={'#'}
                                logo={require('../../assets/img/apple.png')}
                                theme={'white'}
                                name={'App Store'}
                                description={'Download on the'}
                            />
                            <AppShop
                                href={'#'}
                                className={'mr-10'}
                                logo={require('../../assets/img/google-play.png')}
                                theme={'black'}
                                name={'Google Play'}
                                description={'Get it on'}
                            />
                            <img src={require("../../assets/img/qr-code.png")}/>
                        </div>
                    </div>
                    <div className="mr-7">
                        <img src={require("../../assets/img/phone.png")}/>
                    </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <div className="h-1/5"></div>
                    <div className="h-4/5 bg-opaque-red rounded-bl-[35px] rounded-tr-[35px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Mobile