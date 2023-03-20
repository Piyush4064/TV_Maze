import React from "react";
import dummyData from "../../dummy/filter.dummy";
import Filter from "../../organism/filter/Filter";
import InfiniteScroll from "../infiniteScroll/InfiniteScroll";

import styles from "./show.module.css";

const URL = "https://api.tvmaze.com/shows?page=";

function Show() {
    return (
        <div className={styles.show}>
            <h1>Show</h1>
            <div className={styles.filterwithContainer}>
                <Filter data={dummyData} />
                <InfiniteScroll url={URL} requestFrom="show"/>
            </div>
        </div>
    );
}

export default Show;
