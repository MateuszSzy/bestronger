import React from 'react';
import "./Arrows.scss";

function Arrows ({prevPage, nextPage}) {
    return (
        <div className="arrows">
            <div>
                <span className="arrows__prev" onClick={prevPage}>prev</span>
                <span className="arrows__next" onClick={nextPage}>next</span>
            </div>
        </div>

    );
}

export default Arrows;