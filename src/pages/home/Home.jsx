import React from 'react';
import HeroSlider from "./HeroSlider";
import Menu from "./Menu";
import MainNews from "./MainNews";
import Mobile from "./Mobile";

const Home = () => {
    return (
        <div className="font-Roboto">
            <HeroSlider />
            <Menu />
            <MainNews />
            <Mobile />
        </div>
    );
};

export default Home;