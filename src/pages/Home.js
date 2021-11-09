import React from 'react';
import Carousel from "../components/Carousel";
import Form from "./Form";
import "./Home.scss";
import Signup from "./Signup";

const Home = () => {
    return (
        <>
            <div className="home__container">
                <Carousel />
                <Signup />
            </div>


        </>

    );
};

export default Home;