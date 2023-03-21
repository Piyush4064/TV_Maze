import React from "react";
import Show from "../../../templates/show/Show";

import styles from "./people.module.css";

const URL = "https://api.tvmaze.com/people?page=";

function People() {
    return (
        <div className={styles.people}>
            <h1 className={styles.people__title}>People</h1>
            <Show url={URL} favourite={false} requestFrom="people" />
        </div>
    );
}

export default People;
