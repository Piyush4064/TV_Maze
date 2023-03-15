import React from "react";
import { Link } from "react-router-dom";
import CardFooter from "../../molecules/cardFooter/CardFooter";

import styles from "./card.module.css";

function Card() {
    return (
        <div className={styles.card}>
            <Link to="/show/main">
                <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112115.jpg"
                    alt="movie"
                />
            </Link>
            <div className={styles.movieName}>The Mandalorian</div>
            <CardFooter />
        </div>
    );
}

export default Card;
