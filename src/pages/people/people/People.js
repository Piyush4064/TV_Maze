import React from "react";
import Show from "../../../templates/show/Show";

import styles from "./people.module.css";

const URL = "https://api.tvmaze.com/people?page=";

function People() {
    return (
        <div className={styles.show}>
            <h1>People</h1>
            <div className={styles.filterwithContainer}>
                <Show url={URL} favourite={false} requestFrom="people"  />
            </div>
        </div>
    );
}

export default People;
