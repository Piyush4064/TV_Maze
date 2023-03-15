import React from "react";
import ShowCard from "../../organism/showCard/ShowCard";

import styles from "./show.module.css";

function Show() {
    return (
        <div>
            <h1>Show</h1>
            <div className={styles.container}>
                <ShowCard />
                <ShowCard />
                <ShowCard />
                <ShowCard />
                <ShowCard />
                <ShowCard />
            </div>
        </div>
    );
}

export default Show;
