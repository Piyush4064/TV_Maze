import React from "react";

import { Icon } from "../../atom";
import styles from "./moviePosterCard.module.css";

function MoviePosterCard() {
    return (
        <div className={styles.moviePosterCard}>
            <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112115.jpg"
                alt="movie"
            />
            <span className={styles.moviePosterCardFooter}>
                <Icon classes="fa-solid fa-heart" />
                <span>Follow</span>
            </span>
        </div>
    );
}

export default MoviePosterCard;
