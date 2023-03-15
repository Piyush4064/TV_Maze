import React from "react";

import styles from "./knownForShows.module.css";
import Card from "../../organism/card/Card";

function KnownForShows() {
    return (
        <div>
            <h2>Known For</h2>
            <div className={styles.container}>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
                <div className={styles.knownForCard}>
                    <Card favourite={false} />
                </div>
            </div>
        </div>
    );
}

export default KnownForShows;
