import React from "react";

import styles from "./season.module.css";
import CardImage from "../../molecules/cardImage/CardImage";
import SeasonInfo from "../../molecules/seasonInfo/SeasonInfo";

function Season() {
    return (
        <div>
            <div className={styles.season}>
                <CardImage />
                <SeasonInfo />
            </div>
            <div className={styles.season}>
                <CardImage />
                <SeasonInfo />
            </div>
            <div className={styles.season}>
                <CardImage />
                <SeasonInfo />
            </div>
        </div>
    );
}

export default Season;
