import React from 'react';
import Logo from "../ui/Logo";
import ProfileIcon from "../ui/ProfileIcon";
import LanguagePicker from "../LanguagePicker";
import {NavLink} from "react-router-dom";
import SearchButton from "../ui/SearchButton";
import {scrollTop} from '../../helpers';

const NavBar = ({currentLink, setCurrentLink}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [animation, setAnimation] = React.useState('');

    async function onMenuClick() {
        setAnimation(isMenuOpen? 'menu-close' : 'menu-open');
        setIsMenuOpen(!isMenuOpen);
    }

    const defineCurrentPage = (num) => {
        return currentLink === num? 'text-primary-text' : '';
    }

    const onLinkClick = (num) => {
        setCurrentLink(num);
        scrollTop();
        localStorage.setItem('currentLink',String(num));
    }

    return (
        <nav className='flex justify-around items-center z-10 bg-navbarBackground backdrop-blur-[72px]'>
            <Logo theme={'default'} setCurrentLink={setCurrentLink}/>
            <ul
                className={`
                    fixed w-full top-[-1000%] p-12 z-50 bg-white ${animation}
                    min-lg2:static min-lg2:flex min-lg2:h-0 min-lg2:bg-inherit min-lg2:z-0 min-lg2:p-0 min-lg2:justify-evenly min-lg2:items-center min-lg:w-[60vw]
                `}
            >
                <li className={`navbar-link ${defineCurrentPage(1)}`} onClick={() => onLinkClick(1)}> <NavLink to={'/'}> Əsas səhifə </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(2)}`} onClick={() => onLinkClick(2)}> <NavLink to={'about'}> Haqqımızda </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(3)}`} onClick={() => onLinkClick(3)}> <NavLink to={'menu'}> Menyu </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(4)}`} onClick={() => onLinkClick(4)}> <NavLink to={'campaigns'}> Kampaniyalar </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(5)}`} onClick={() => onLinkClick(5)}> <NavLink to={'news'}> Xəbərlər </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(6)}`} onClick={() => onLinkClick(6)}> <NavLink to={'career'}> Karyera </NavLink> </li>
                <li className={`navbar-link ${defineCurrentPage(7)}`} onClick={() => onLinkClick(7)}> <NavLink to={'contact'}> Əlaqə </NavLink> </li>
            </ul>
            <ul className={'flex justify-between items-center'}>
                <SearchButton/>
                <NavLink to={'cart'} onClick={() => onLinkClick(0)}>
                    <button className='navbar-icon'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.96875 19.3438C7.63499 19.3438 7.30873 19.2448 7.03123 19.0594C6.75372 18.8739 6.53743 18.6104 6.4097 18.302C6.28198 17.9937 6.24856 17.6544 6.31367 17.327C6.37879 16.9997 6.53951 16.699 6.77551 16.463C7.01151 16.227 7.31219 16.0663 7.63953 16.0012C7.96688 15.9361 8.30618 15.9695 8.61453 16.0972C8.92288 16.2249 9.18643 16.4412 9.37186 16.7187C9.55728 16.9962 9.65625 17.3225 9.65625 17.6562C9.65625 18.1038 9.47846 18.533 9.16199 18.8495C8.84553 19.166 8.4163 19.3438 7.96875 19.3438ZM15.2812 19.3438C14.9475 19.3438 14.6212 19.2448 14.3437 19.0594C14.0662 18.8739 13.8499 18.6104 13.7222 18.302C13.5945 17.9937 13.5611 17.6544 13.6262 17.327C13.6913 16.9997 13.852 16.699 14.088 16.463C14.324 16.227 14.6247 16.0663 14.952 16.0012C15.2794 15.9361 15.6187 15.9695 15.927 16.0972C16.2354 16.2249 16.4989 16.4412 16.6844 16.7187C16.8698 16.9962 16.9688 17.3225 16.9688 17.6562C16.9688 18.1038 16.791 18.533 16.4745 18.8495C16.158 19.166 15.7288 19.3438 15.2812 19.3438ZM17.25 14.8438H6C5.80192 14.8419 5.61062 14.7714 5.45878 14.6442C5.30694 14.5169 5.20398 14.341 5.1675 14.1462L3.04125 2.46875H1.5C1.27622 2.46875 1.06161 2.37986 0.903379 2.22162C0.745145 2.06339 0.65625 1.84878 0.65625 1.625C0.65625 1.40122 0.745145 1.18661 0.903379 1.02838C1.06161 0.870145 1.27622 0.78125 1.5 0.78125H3.75C3.94808 0.783075 4.13938 0.853621 4.29122 0.980839C4.44306 1.10806 4.54602 1.28405 4.5825 1.47875L5.06625 4.15625H19.5C19.6281 4.15666 19.7545 4.18624 19.8695 4.24277C19.9845 4.2993 20.0852 4.38128 20.1637 4.4825C20.2413 4.58355 20.2957 4.70046 20.3229 4.82491C20.3501 4.94937 20.3496 5.07829 20.3212 5.2025L18.0712 14.2025C18.0241 14.3849 17.9181 14.5467 17.7696 14.6627C17.6211 14.7786 17.4384 14.8423 17.25 14.8438ZM6.70875 13.1562H16.5863L18.375 5.84375H5.37L6.70875 13.1562Z" fill="#8F161A"/>
                        </svg>
                    </button>
                </NavLink>
                <ProfileIcon onLinkClick={onLinkClick}/>
            </ul>
            <LanguagePicker/>
            <svg onClick={onMenuClick} className="fill-primary-bg hover:cursor-pointer min-lg2:hidden" width="48" height="32" viewBox="0 0 48 32"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z"/>
            </svg>
            <svg style={{display: isMenuOpen? 'block' : 'none'}}
                onClick={onMenuClick} className="fill-primary-bg hover:cursor-pointer fixed right-0 top-0 m-3 z-50 close-button-appear min-lg2:hidden" width="33" height="33" viewBox="0 0 33 33" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 0.25C13.2861 0.25 10.1443 1.20305 7.47199 2.98862C4.79969 4.77419 2.71689 7.31209 1.48697 10.2814C0.257041 13.2507 -0.0647633 16.518 0.562247 19.6702C1.18926 22.8224 2.73692 25.7179 5.00952 27.9905C7.28213 30.2631 10.1776 31.8108 13.3298 32.4378C16.482 33.0648 19.7493 32.743 22.7186 31.513C25.6879 30.2831 28.2258 28.2003 30.0114 25.528C31.797 22.8557 32.75 19.7139 32.75 16.5C32.75 14.366 32.3297 12.2529 31.5131 10.2814C30.6964 8.30985 29.4994 6.51847 27.9905 5.00952C26.4815 3.50056 24.6902 2.3036 22.7186 1.48696C20.7471 0.670319 18.634 0.25 16.5 0.25ZM20.9038 18.5963C21.0561 18.7473 21.177 18.927 21.2595 19.1251C21.342 19.3231 21.3844 19.5355 21.3844 19.75C21.3844 19.9645 21.342 20.1769 21.2595 20.3749C21.177 20.573 21.0561 20.7527 20.9038 20.9038C20.7527 21.0561 20.573 21.177 20.3749 21.2594C20.1769 21.3419 19.9645 21.3844 19.75 21.3844C19.5355 21.3844 19.3231 21.3419 19.1251 21.2594C18.927 21.177 18.7473 21.0561 18.5963 20.9038L16.5 18.7913L14.4038 20.9038C14.2527 21.0561 14.073 21.177 13.8749 21.2594C13.6769 21.3419 13.4645 21.3844 13.25 21.3844C13.0355 21.3844 12.8231 21.3419 12.6251 21.2594C12.427 21.177 12.2473 21.0561 12.0963 20.9038C11.9439 20.7527 11.8231 20.573 11.7406 20.3749C11.6581 20.1769 11.6156 19.9645 11.6156 19.75C11.6156 19.5355 11.6581 19.3231 11.7406 19.1251C11.8231 18.927 11.9439 18.7473 12.0963 18.5963L14.2088 16.5L12.0963 14.4038C11.7903 14.0978 11.6184 13.6827 11.6184 13.25C11.6184 12.8173 11.7903 12.4022 12.0963 12.0963C12.4023 11.7903 12.8173 11.6184 13.25 11.6184C13.6827 11.6184 14.0978 11.7903 14.4038 12.0963L16.5 14.2088L18.5963 12.0963C18.9023 11.7903 19.3173 11.6184 19.75 11.6184C20.1827 11.6184 20.5978 11.7903 20.9038 12.0963C21.2098 12.4022 21.3817 12.8173 21.3817 13.25C21.3817 13.6827 21.2098 14.0978 20.9038 14.4038L18.7913 16.5L20.9038 18.5963Z"/>
            </svg>
        </nav>
    );
};

export default NavBar;