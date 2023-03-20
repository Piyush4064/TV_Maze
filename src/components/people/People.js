import React from "react";

import InfiniteScroll from "../infiniteScroll/InfiniteScroll";

import styles from "./people.module.css";

const URL = "https://api.tvmaze.com/people?page=";

function People() {
    return (
        <div>
            <h1>People</h1>
            <InfiniteScroll url={URL} favourite={false} requestFrom="people"/>
        </div>
    );
}

export default People;
