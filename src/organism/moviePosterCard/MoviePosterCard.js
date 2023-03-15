import React from "react";

import { Icon } from "../../atom";
import CardImage from "../../molecules/cardImage/CardImage";
import CardFooterIcon from "../../molecules/cardFooterIcon/CardFooterIcon";
import styles from "./moviePosterCard.module.css";

function MoviePosterCard() {
    return (
        <div className={styles.moviePosterCard}>
            <CardImage />
            <CardFooterIcon follow="true" />
        </div>
    );
}

export default MoviePosterCard;
