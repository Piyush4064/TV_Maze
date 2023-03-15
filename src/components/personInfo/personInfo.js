import React from "react";

import PeopleCard from "../../organism/peopleCard/PeopleCard";

import styles from "./personInfo.module.css";
import Info from "../info/Info";
function PersonInfo() {
    return (
        <div>
            <Info />
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
        </div>
    );
}

export default PersonInfo;
