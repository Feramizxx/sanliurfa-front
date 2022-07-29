import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "./ui/Button";
import LoginForm from "./LoginForm";

const MessageBox = ({isVisible}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [loginForm, setLoginForm] = React.useState(false);

    const onMouseEnter = (e) => {
        setLoginForm(true);
    }

    const onMouseLeave = () => {
        setLoginForm(false);
    }

    return (
        <div style={{display: isVisible? 'block' : 'none'}} className={'absolute mt-7 mr-6'}>
            <div className='flex justify-center bg-red-10'>
                <div style={{
                    transform: 'rotate(90deg)',
                    width: 0,
                    height: 0,
                    borderRight: '20px solid #ffffff',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                }}/>
            </div>
            <div className={`bg-white px-6 py-2 w-48`}>
                <ul>
                    <li className='message-box-link'> <a href="#"> Profilim </a> </li>
                    <li className='message-box-link'> <a href="#"> Sifarişlərim </a> </li>
                    <li className='message-box-link'> <a href="#"> Ünvanlarım </a> </li>
                    <li className={'message-box-link border-b-0'}>
                        <div className={`flex ${!isAuth? 'flex-col' : 'flex-row'} ${!isAuth? 'justify-center' : 'items-center'}`}>
                            { isAuth? <a href={'#'} className='mr-3'> Çıxış </a> :
                            <Button
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                theme={'default'}
                            >
                                Giriş
                            </Button> }
                            <svg className='hover:cursor-pointer' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 style={{
                                     display: !isAuth? 'none' : 'block'
                                }}
                            >
                                <path d="M2.64663 1.68968C2.8806 1.68968 3.105 1.60067 3.27044 1.44223C3.43589 1.28379 3.52884 1.0689 3.52884 0.844839C3.52884 0.620774 3.43589 0.405886 3.27044 0.247448C3.105 0.0890097 2.8806 0 2.64663 0H0.882209C0.648233 0 0.423839 0.0890097 0.258393 0.247448C0.0929469 0.405886 0 0.620774 0 0.844839V12.6726C0 12.8966 0.0929469 13.1115 0.258393 13.27C0.423839 13.4284 0.648233 13.5174 0.882209 13.5174H2.64663C2.8806 13.5174 3.105 13.4284 3.27044 13.27C3.43589 13.1115 3.52884 12.8966 3.52884 12.6726C3.52884 12.4485 3.43589 12.2336 3.27044 12.0752C3.105 11.9168 2.8806 11.8277 2.64663 11.8277H1.76442V1.68968H2.64663ZM14.8388 6.2687L12.3509 2.88935C12.216 2.70721 12.0113 2.58364 11.7815 2.54564C11.5517 2.50765 11.3155 2.55832 11.1247 2.68659C11.0292 2.75061 10.948 2.83211 10.8857 2.92636C10.8233 3.02061 10.7811 3.12575 10.7614 3.23572C10.7417 3.34569 10.745 3.4583 10.771 3.56706C10.797 3.67581 10.8452 3.77856 10.9129 3.86936L12.4303 5.91387H5.29325C5.05928 5.91387 4.83488 6.00288 4.66944 6.16132C4.50399 6.31976 4.41104 6.53464 4.41104 6.75871C4.41104 6.98277 4.50399 7.19766 4.66944 7.3561C4.83488 7.51454 5.05928 7.60355 5.29325 7.60355H12.3509L10.763 9.63116C10.6934 9.71992 10.6429 9.82092 10.6141 9.92839C10.5854 10.0359 10.579 10.1477 10.5954 10.2575C10.6118 10.3674 10.6506 10.473 10.7096 10.5685C10.7686 10.664 10.8467 10.7474 10.9394 10.8139C11.0921 10.9236 11.2778 10.9829 11.4687 10.9829C11.6057 10.9829 11.7408 10.9524 11.8633 10.8937C11.9858 10.8351 12.0923 10.7499 12.1745 10.645L14.8211 7.26561C14.9341 7.12272 14.9967 6.94912 14.9999 6.76992C15.003 6.59071 14.9466 6.41518 14.8388 6.2687Z" fill="black"/>
                            </svg>
                            <LoginForm isVisible={loginForm} setIsVisible={setLoginForm}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MessageBox;