import React from "react";

const Radio = (props) => {
    return (
        <div className={'flex mr-10'}>
            <input type={'radio'} id={props.size} name={'size'} className={'mr-1 accent-red'} defaultChecked={props.size === 'middle'} />
            <label htmlFor={props.size}>{props.label}</label>
        </div>
    )
}

export default Radio