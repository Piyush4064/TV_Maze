import React from "react";
import Card from "../../organism/card/Card";

import styles from "./people.module.css";

function People() {
    return (
        <div>
            <h1>People</h1>
            <div className={styles.container}>
                <Card favourite={false} />
                <Card favourite={false} />
                <Card favourite={false} />
                <Card favourite={false} />
                <Card favourite={false} />
            </div>
        </div>
    );
}

export default People;
