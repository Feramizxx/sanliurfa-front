import React, { memo } from 'react';
import HeroSlider from "./HeroSlider";
import Menu from "./Menu";
import MainNews from "./MainNews";
import Mobile from "./Mobile";

const Home = memo(() => {
    return (
        <div>
            <HeroSlider />
            <Menu />
            <MainNews />
            <Mobile />
        </div>
    );
});

export default Home;