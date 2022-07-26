import React from 'react';
import Logo from "../ui/Logo";
import ProfileIcon from "../ui/ProfileIcon";
import LanguagePicker from "../ui/LanguagePicker";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const [currentLink, setCurrentLink] = React.useState(1);

    const defineCurrentPage = (num) => {
        return currentLink === num? 'text-primary-text' : '';
    }

    const onLinkClick = (num) => {
        setCurrentLink(num);
    }

    return (
        <nav className='flex justify-around items-center z-10 bg-navbarBackground backdrop-blur-[72px]'>
            <Logo theme={'default'}/>
            <ul>
                <li className={`navbar-link ${defineCurrentPage(1)}`} onClick={() => onLinkClick(1)}> <NavLink to={'/'}> Əsas səhifə </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(2)}`} onClick={() => onLinkClick(2)}> <NavLink to={'#'}> Haqqımızda </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(3)}`} onClick={() => onLinkClick(3)}> <NavLink to={'#'}> Menyu </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(4)}`} onClick={() => onLinkClick(4)}> <NavLink to={'#'}> Kampaniyalar </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(5)}`} onClick={() => onLinkClick(5)}> <NavLink to={'#'}> Xəbərlər </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(6)}`} onClick={() => onLinkClick(6)}> <NavLink to={'career'}> Karyea </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(7)}`} onClick={() => onLinkClick(7)}> <NavLink to={'contact'}> Əlaqə </NavLink> </li>
            </ul>
            <ul>
                <button className='navbar-icon'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0313 17.1033L13.0753 12.1473C14.2662 10.7175 14.8601 8.88367 14.7334 7.02719C14.6067 5.1707 13.7691 3.43454 12.3949 2.17987C11.0207 0.925202 9.2157 0.24863 7.35538 0.2909C5.49505 0.33317 3.72264 1.09103 2.40685 2.40682C1.09106 3.72261 0.3332 5.49502 0.29093 7.35535C0.24866 9.21567 0.925232 11.0207 2.1799 12.3949C3.43457 13.7691 5.17073 14.6066 7.02722 14.7334C8.8837 14.8601 10.7176 14.2662 12.1473 13.0752L17.1033 18.0312L18.0313 17.1033ZM1.62503 7.53125C1.62503 6.3631 1.97143 5.22119 2.62041 4.24991C3.2694 3.27864 4.19183 2.52162 5.27106 2.07459C6.35028 1.62756 7.53783 1.51059 8.68353 1.73849C9.82923 1.96638 10.8816 2.5289 11.7076 3.3549C12.5336 4.1809 13.0962 5.2333 13.324 6.379C13.5519 7.5247 13.435 8.71225 12.9879 9.79147C12.5409 10.8707 11.7839 11.7931 10.8126 12.4421C9.84134 13.0911 8.69943 13.4375 7.53128 13.4375C5.96538 13.4358 4.46411 12.8129 3.35685 11.7057C2.24959 10.5984 1.62677 9.09715 1.62503 7.53125Z" fill="#8F161A"/>
                    </svg>
                </button>
                <button className='navbar-icon'>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.96875 19.3438C7.63499 19.3438 7.30873 19.2448 7.03123 19.0594C6.75372 18.8739 6.53743 18.6104 6.4097 18.302C6.28198 17.9937 6.24856 17.6544 6.31367 17.327C6.37879 16.9997 6.53951 16.699 6.77551 16.463C7.01151 16.227 7.31219 16.0663 7.63953 16.0012C7.96688 15.9361 8.30618 15.9695 8.61453 16.0972C8.92288 16.2249 9.18643 16.4412 9.37186 16.7187C9.55728 16.9962 9.65625 17.3225 9.65625 17.6562C9.65625 18.1038 9.47846 18.533 9.16199 18.8495C8.84553 19.166 8.4163 19.3438 7.96875 19.3438ZM15.2812 19.3438C14.9475 19.3438 14.6212 19.2448 14.3437 19.0594C14.0662 18.8739 13.8499 18.6104 13.7222 18.302C13.5945 17.9937 13.5611 17.6544 13.6262 17.327C13.6913 16.9997 13.852 16.699 14.088 16.463C14.324 16.227 14.6247 16.0663 14.952 16.0012C15.2794 15.9361 15.6187 15.9695 15.927 16.0972C16.2354 16.2249 16.4989 16.4412 16.6844 16.7187C16.8698 16.9962 16.9688 17.3225 16.9688 17.6562C16.9688 18.1038 16.791 18.533 16.4745 18.8495C16.158 19.166 15.7288 19.3438 15.2812 19.3438ZM17.25 14.8438H6C5.80192 14.8419 5.61062 14.7714 5.45878 14.6442C5.30694 14.5169 5.20398 14.341 5.1675 14.1462L3.04125 2.46875H1.5C1.27622 2.46875 1.06161 2.37986 0.903379 2.22162C0.745145 2.06339 0.65625 1.84878 0.65625 1.625C0.65625 1.40122 0.745145 1.18661 0.903379 1.02838C1.06161 0.870145 1.27622 0.78125 1.5 0.78125H3.75C3.94808 0.783075 4.13938 0.853621 4.29122 0.980839C4.44306 1.10806 4.54602 1.28405 4.5825 1.47875L5.06625 4.15625H19.5C19.6281 4.15666 19.7545 4.18624 19.8695 4.24277C19.9845 4.2993 20.0852 4.38128 20.1637 4.4825C20.2413 4.58355 20.2957 4.70046 20.3229 4.82491C20.3501 4.94937 20.3496 5.07829 20.3212 5.2025L18.0712 14.2025C18.0241 14.3849 17.9181 14.5467 17.7696 14.6627C17.6211 14.7786 17.4384 14.8423 17.25 14.8438ZM6.70875 13.1562H16.5863L18.375 5.84375H5.37L6.70875 13.1562Z" fill="#8F161A"/>
                    </svg>
                </button>
                <ProfileIcon/>
            </ul>
            <LanguagePicker/>
        </nav>
    );
};

export default NavBar;