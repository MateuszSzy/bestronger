import React from 'react';
import "./Carousel__content.scss";
import "./Arrows";

function Carousel__content({activeIndex, imageSlider}) {
    return (
        <section>
            {imageSlider.map((slide,index) => (
                <div
                    className={index === activeIndex ? "active" : "inactive"}
                    key={index}
                >
                    <img className="slide__image" src={slide.urls} alt="" />
                    <h2 className="slide__title">{slide.title}</h2>
                    <h3 className="slide__text">{slide.description}</h3>
                </div>
                ))}
        </section>
    );
}

export default Carousel__content;

