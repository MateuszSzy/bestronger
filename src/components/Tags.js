import React from 'react';
import "./Tags.scss";

function Tags({activeIndex, onClick, imageSlider}){
    return (
        <div className="all__tags">
            {imageSlider.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "tag active-tag" : "tag"}`}
                    onClick={() => onClick(index)}>
                </span>
            ))}
        </div>
    );
}

export default Tags;