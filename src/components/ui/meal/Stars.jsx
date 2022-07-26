import React from "react";
import GoldStar from "../../../assets/icons/stars/starGold.svg";
import GrayStar from "../../../assets/icons/stars/starGray.svg";

const Stars = (props) => {
    const elements = [];

    for (let i = 0; i < props.rating; i++) elements.push(<img src={GoldStar} key={i} />);
    for (let i = 0; i < 5 - props.rating; i++) elements.push(<img src={GrayStar} key={props.rating + i} />);

    return (
      <div className={'flex'}>{elements}</div>
    );
}

export default Stars;