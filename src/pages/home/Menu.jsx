import React, { Component } from "react";

class Menu extends Component {
    state = {}

    render() {
        return (
            <div className='py-14'>
                    <div className='flex justify-between items-end mb-12 px-14'>
                        <h2 className="font-bold text-[50px] text-[#BB2025]">Menyu</h2>
                        <a href="#" className="font-light text-[25px] text-[#8F161A] underline decoration-2 underline-offset-2">Daha çox</a>
                    </div>
                    <div className="bg-red py-48 relative">
                        <div className="absolute top-0 left-0 w-full overflow-hidden">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                                 className="relative block h-[76px]" style={{'width': 'calc(128% + 1.3px)'}}>
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"
                                    className="fill-white"/>
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                                 className="relative block h-[76px]" style={{'width': 'calc(128% + 1.3px)'}}>
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="fill-white"/>
                            </svg>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Menu;