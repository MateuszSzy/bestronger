import React, {useState, useEffect} from 'react';
import Carousel__content from "./Carousel__content";
import imageSlider from "./Carousel_pics";
import Arrows from "./Arrows";
import Tags from "./Tags";
import "./Carousel.scss";


const len = imageSlider.length - 1;

function Carousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval =setInterval(() =>{
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider__container">
            <Carousel__content
                activeIndex={activeIndex}
                imageSlider={imageSlider}
            />
            <Arrows
                prevPage={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextPage={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Tags
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Carousel;