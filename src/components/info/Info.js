import React from "react";

import MoviePosterCard from "../../organism/moviePosterCard/MoviePosterCard";
import FlashCard from "../../molecules/flashCard/FlashCard";
import Description from "../../organism/description/Description";
import styles from "./info.module.css";

function Info() {
    return (
        <div>
            <h1>The Mandalorian</h1>
            <div className={styles.main}>
                <MoviePosterCard />
                <Description />
                <FlashCard />
            </div>
        </div>
    );
}

export default Info;
