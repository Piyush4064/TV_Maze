import React from "react";

import Icon from "../../atom/icon";

import styles from "./starRating.module.css";

function StarRating({ rating = 0 }) {
    const fullStar = Math.floor(rating);
    const halfStar = (rating * 10) % 10 > 0 ? 1 : 0;
    const emptyStar = 10 - fullStar - halfStar;
    console.log("Star rating");
    return (
        <div className={styles.starRating}>
            {[...Array(fullStar)].map((_, index) => {
                return (
                    <Icon
                        className="fa-solid fa-star"
                        key={index + Math.random()}
                        styleColor={{ color: "#c39a04" }}
                    />
                );
            })}
            {halfStar > 0 && (
                <Icon
                    className="fa-solid fa-star-half-stroke"
                    styleColor={{ color: "#c39a04" }}
                />
            )}
            {[...Array(emptyStar)].map((_, index) => {
                return (
                    <Icon
                        className="fa-regular fa-star"
                        key={index + Math.random()}
                        styleColor={{ color: "#c39a04" }}
                    />
                );
            })}
            <span className={styles.starRating__rating}>{rating || 0}</span>
        </div>
    );
}

export default StarRating;
