import React from 'react';
import Carousel from "../components/Carousel";
import Form from "./Form";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="home__container">
                <Carousel />
                <Form />
            </div>


        </>

    );
};

export default Home;