import React from "react";
import dummyData from "../../dummy/filter.dummy";
import Card from "../../organism/card/Card";
import Filter from "../../organism/filter/Filter";

import styles from "./show.module.css";

function Show() {
    return (
        <div>
            <h1>Show</h1>
            <div className={styles.filterwithContainer}>
            <Filter data={dummyData}/>
            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </div>
    );
}

export default Show;
