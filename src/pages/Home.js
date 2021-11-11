import React from 'react';
import Carousel from "../components/Carousel";

import "./Home.scss";
import Signup from "./Signup";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="home__container">
                <Carousel />
                <Signup />
                <Footer />
            </div>


        </>

    );
};

export default Home;