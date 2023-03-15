import React from "react";

import styles from "./flashCard.module.css";

function FlashCard() {
    return (
        <div className={styles.flashCard}>
            <h2>Show Info </h2>
            <div>
                <strong>Web channel:</strong>
                {" Disney+ (2019 - now)"}
            </div>
            <div>
                <strong>Schedule:</strong>
                {" Wednesdays (~ 41 min)"}
            </div>
            <div>
                <strong>Status</strong>
                {" Running"}
            </div>
            <div>
                <strong>Show Type:</strong>
                {" Scripted"}
            </div>
            <div>
                <strong>Genres:</strong>
                {" Action Adventure Science-Fiction"}
            </div>
            <div>
                <strong>Episodes ordered</strong>
                {" 8 episodes"}
            </div>
            <div>
                <strong>Created by:</strong>
                {" Jon Favreau"}
            </div>
            <div>
                <strong>Official site:</strong>
                {" www.disneyplus.com"}
            </div>
        </div>
    );
}

export default FlashCard;
