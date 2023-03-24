import React from "react";

import Icon from "../../atom/icon";

function StarRating({ rating = 0 }) {
    const fullStar = Math.floor(rating);
    const halfStar = (rating * 10) % 10 > 0 ? 1 : 0;
    const emptyStar = 10 - fullStar - halfStar;
    console.log("Star rating");
    return (
        <div>
            <Icon classes="fa-solid fa-star" />
            {[...Array(fullStar)].map((_, index) => {
                return <Icon classes="fa-solid fa-star" key={index + Math.random()} />;
            })}
            {halfStar && <Icon classes="fa-solid fa-star-half-stroke" />}
            {[...Array(emptyStar)].map((_, index) => {
                return <Icon classes="fa-regular fa-star" key={index + Math.random()} />;
            })}
        </div>
    );
}

export default StarRating;
