import "./Packages.scss";
import React from 'react';


const Packages = () => {
    return (

        <section className="packages container" id="packages">
            <h2>Packages</h2>
            <div className="packages__boxes">

                <div className="packages__box packages__box__classic">
                    <div className="packages__details">
                        <button className="packages__type">Classic</button>
                        <div className="packages__price">$0</div>
                    </div>
                    <ul className="packages__items">
                        <li className="packages__item">3 exercises </li>
                        <li className="packages__item">Trainer support</li>
                        <li className="packages__item">Water demand </li>
                    </ul>
                </div>


                <div className="packages__box packages__box__premium">
                    <div className="packages__details">
                        <button className="packages__type">Ultra</button>
                        <div className="packages__price">$89</div>
                    </div>
                    <ul className="packages__items">
                        <li className="packages__item">UNLIMITED EXERCISES</li>
                        <li className="packages__item">Trainer support</li>
                        <li className="packages__item">Water demand </li>
                        <li className="packages__item">Free Shaker !</li>
                    </ul>
                </div>


                <div className="packages__box packages__box__ultra">
                    <div className="packages__details">
                        <button className="packages__type">Premium</button>
                        <div className="packages__price">$49</div>
                    </div>
                    <ul className="packages__items">
                        <li className="packages__item">5 exercises</li>
                        <li className="packages__item">Trainer support</li>
                        <li className="packages__item">Water demand </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Packages;