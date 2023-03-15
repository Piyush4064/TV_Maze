import React from "react";

import { Icon } from "../../atom";
import { Link } from "react-router-dom";

import styles from "./card.module.css";

function Card({
    showFooterIcon = true,
    follow = false,
    favourite = true,
    showFooterName = true,
}) {
    return (
        <div className={styles.card}>
            <Link to="/show/main">
                <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112115.jpg"
                    alt="movie"
                    className={!showFooterName && !showFooterIcon && styles.maxHeight}
                />
            </Link>

            {showFooterName && (
                <div>
                    <div className={styles.movieName}>The Mandalorian</div>
                </div>
            )}

            {showFooterIcon &&
                (follow === false ? (
                    <div className={styles.cardFooter}>
                        <Icon classes="fa-regular fa-heart" />
                        {favourite && (
                            <div>
                                <Icon classes="fa-regular fa-star " />
                                <span>8.6</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.cardFooter}>
                        <span className={styles.moviePosterCardFooter}>
                            <Icon classes="fa-solid fa-heart" />
                            <span>Follow</span>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Card;
