import React from "react";

import styles from "./knownForShows.module.css";
import PeopleCard from "../../organism/peopleCard/PeopleCard";

function KnownForShows() {
    return (
        <div>
            <h2>Known For</h2>
            <div className={styles.container}>
                <div className={styles.knownForCard}>
                    <PeopleCard />
                </div>
                <div className={styles.knownForCard}>
                    <PeopleCard />
                </div>
                <div className={styles.knownForCard}>
                    <PeopleCard />
                </div>
            </div>
        </div>
    );
}

export default KnownForShows;
