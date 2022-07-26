import React from "react";

const Campaign = (props) => {
    return (
        <div className={'rounded-3xl flex mb-20 duration-500 hover:scale-110'}>
            <img src={props.image} className={'rounded-3xl'}  />
        </div>
    )
}

export default Campaign;