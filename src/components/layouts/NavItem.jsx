import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = ({current,num,onLinkClick,children,to}) => {
    const defineCurrentPage = (num) => {
        return current === num? 'text-primary-text' : '';
    }

    const onClick = () => {
        onLinkClick(num);
    }

    return (
        <li className={`navbar-link ${defineCurrentPage(num)}`} onClick={onClick}> <NavLink to={to}> {children} </NavLink> </li>
    );
};

export default NavItem;