import React from "react";

import styles from "./cast.module.css";
import CardImage from "../../molecules/cardImage/CardImage";
import CastInfo from "../../molecules/castInfo/CastInfo";
function Cast() {
    return (
        <div className={styles.cast}>
            <div className={styles.card}>
                <CardImage />
                <CastInfo />
            </div>
            <div className={styles.card}>
                <CardImage />
                <CastInfo />
            </div>
            <div className={styles.card}>
                <CardImage />
                <CastInfo />
            </div>
            <div className={styles.card}>
                <CardImage />
                <CastInfo />
            </div>
            </div>
    );
}

export default Cast;
