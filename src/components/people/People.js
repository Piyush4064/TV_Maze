import React from "react";
import PeopleCard from "../../organism/peopleCard/PeopleCard";

import styles from "./people.module.css";

function People() {
    return (
        <div>
            <h1>People</h1>
            <div className={styles.container}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </div>
        </div>
    );
}

export default People;
