import "./Packages.scss";
import React from 'react';
import Footer from "../components/Footer";


const Packages = () => {
    return (
        <>
        <div className="packages">
            <h1>Packages</h1>
            <div className="packages__container">

                <div className="packages__classic">
                    <div className="packages__classic__details">
                        <button className="packages__classic__details__type">Classic</button>
                        <div className="packages__classic__details__price">$0</div>
                    </div>
                    <ul className="packages__items">
                        <li className="packages__items__item"><span>.</span>3 exercises </li>
                        <li className="packages__items__item"><span>.</span>Trainer support</li>
                        <li className="packages__items__item"><span>.</span>Water demand </li>
                    </ul>
                </div>


                <div className="packages__ultra">
                    <div className="packages__ultra__detaile">
                        <button className="packages__ultra__detaile__types">Ultra</button>
                        <div className="packages__ultra__detaile__prices">$89</div>
                    </div>
                    <ul className="packages__itemse">
                        <li className="packages__itemse__ite"><span>.</span>UNLIMITED EXERCISES</li>
                        <li className="packages__itemse__ite"><span>.</span>Trainer support</li>
                        <li className="packages__itemse__ite"><span>.</span>Water demand </li>
                        <li className="packages__itemse__ite"><span>.</span>Free Shaker !</li>
                    </ul>
                </div>


                <div className="packages__premium">
                    <div className="packages__premium__detailss">
                        <button className="packages__premium__detailss__typ">Premium</button>
                        <div className="packages__premium__detailss__pric">$49</div>
                    </div>
                    <ul className="packages__itemses">
                        <li className="packages__itemses__it"><span>.</span>5 exercises</li>
                        <li className="packages__itemses__it"><span>.</span>Trainer support</li>
                        <li className="packages__itemses__it"><span>.</span>Water demand </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Packages;