import React from 'react';
import "./Signup.scss";
import "./Packages";


const Signup = () => {
    return (
        <div>
            <section className="form__container">
                <h2>Choose your package!</h2>
                <h3>Ask a question ?</h3>
                <h4>Check how much you will pay </h4>

                <div className="calc__columns">
                    <form className="calc__form">
                        <div className="calc__input">
                            <input type="number" className="form__input" id="products" min="1" step="1"
                                   placeholder="Products quantity"/>
                        </div>
                        <div className="calc__input">
                            <input type="number" className="form__input" id="orders" min="1" step="1"
                                   placeholder="Estimated orders in month"/>
                        </div>
                        <div className="calc__select" id="package" data-value="">
                            <div className="select__input">
                                Choose package
                            </div>

                            <ul className="select__dropdown">
                                <li data-value="basic">Basic</li>
                                <li data-value="professional">Professional</li>
                                <li data-value="premium">Premium</li>
                            </ul>
                        </div>
                        <label className="form__checkbox">
                            <input type="checkbox" id="accounting"/>
                            <span className="checkbox"></span>
                            <p className="consent__text">Accounting</p>
                        </label>
                        <label className="form__checkbox">
                            <input type="checkbox" id="terminal"/>
                            <span className="checkbox"></span>
                            <p className="consent__text">Rental of a payment terminal</p>
                        </label>
                    </form>

                    <div className="calc__summary">
                        <ul>
                            <li className="list__item" data-id="products">
                                <span className="item__type">Products</span>
                                <span className="item__calc">20 * $0.5</span>
                                <span className="item__price">$10</span>
                            </li>
                            <li className="list__item" data-id="orders">
                                <span className="item__type">Orders</span>
                                <span className="item__calc">20 * $0.5</span>
                                <span className="item__price">$10</span>
                            </li>
                            <li className="list__item" data-id="package">
                                <span className="item__type">Package</span>
                                <span className="item__calc">Premium</span>
                                <span className="item__price">$10</span>
                            </li>
                            <li className="list__item" data-id="accounting">
                                <span className="item__type">Accounting</span>
                                <span className="item__price">$10</span>
                            </li>
                            <li className="list__item" data-id="terminal">
                                <span className="item__type">Terminal</span>
                                <span className="item__price">$10</span>
                            </li>
                        </ul>
                        <div className="summary__total" id="total-price">
                            <span>Total</span>
                            <span className="total__price">$700</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;