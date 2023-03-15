import React from "react";
import Card from "../../organism/card/Card";

import styles from "./show.module.css";

function Show() {
    return (
        <div>
            <h1>Show</h1>
            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Show;
