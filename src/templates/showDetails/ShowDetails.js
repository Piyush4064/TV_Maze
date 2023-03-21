import React from "react";

import styles from "./showDetails.module.css";
import MovieNav from "../../molecules/movieNav/MovieNav";

function ShowDetails(props) {
    return (
        <div className={styles.showDetails}>
            {props.showTitle && <h1>{props.showTitle}</h1>}
            <MovieNav />
            {props.children}
        </div>
    );
}

export default ShowDetails;
