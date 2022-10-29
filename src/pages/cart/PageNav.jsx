import { useContext } from "react";
import NextIcon from "../../assets/icons/cart/next.svg";
import PrevIcon from "../../assets/icons/cart/prev.svg";
import { AuthContext } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

const PageNav = (props) => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate()

    const onClick = (e, to) => {
        e.stopPropagation();
        if (isAuth) {
            navigate(to);
        } else {
            props.onError();
        }
    }

    return (
        <div className={'px-48 lg2:px-10'}>
            {props.prev &&
                <div className="hover:cursor-pointer" onClick={async (e) => {
                    onClick(e, '/cart/' + (props.prev !== 'Cart' ? props.prev.toLowerCase() : ''));
                }}>
                    <div className={'flex float-left'}>
                        <img src={PrevIcon} className={'mr-3 '} />
                        <p className={'text-xl sm:text-base'}>{props.prev}</p>
                    </div>
                </div>
            }
            {props.next &&
                <div className="hover:cursor-pointer" onClick={async (e) => {
                    if (props.onClick) {
                        const data = await props.onClick(e);
                        if (data) {
                            onClick(e, '/cart/' + props.next.toLowerCase())
                        }
                    } else {
                        onClick(e, '/cart/' + props.next.toLowerCase())
                    }
                }}>
                    <div className={'flex float-right'}>
                        <p className={'text-xl mr-3 sm:text-base'}>{props.next}</p>
                        <img src={NextIcon} />
                    </div>
                </div>
            }
        </div >
    )
}

export default PageNav;