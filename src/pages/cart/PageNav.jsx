import React from "react";
import NextIcon from "../../assets/icons/cart/next.svg";
import PrevIcon from "../../assets/icons/cart/prev.svg";
import {NavLink} from "react-router-dom";

const PageNav = (props) => {
    return (
        <div className={'px-48 md:px-10'}>
            {props.prev &&
                <NavLink to={'/cart/' + (props.prev !== 'Cart' ? props.prev.toLowerCase() : '')}>
                    <div className={'flex float-left'}>
                        <img src={PrevIcon} className={'mr-3 '}/>
                        <p className={'text-xl sm:text-base'}>{props.prev}</p>
                    </div>
                </NavLink>
            }
            {props.next &&
                <NavLink to={'/cart/' + props.next.toLowerCase()}>
                    <div className={'flex float-right'}>
                        <p className={'text-xl mr-3 sm:text-base'}>{props.next}</p>
                        <img src={NextIcon} />
                    </div>
                </NavLink>
            }
        </div>
    )
}

export default PageNav;