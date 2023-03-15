import React from "react";

import CardFooterIcon from "../../molecules/cardFooterIcon/CardFooterIcon";
import CardFooterName from "../../molecules/cardFooterName/CardFooterName";
import CardImage from "../../molecules/cardImage/CardImage";

import styles from "./showCard.module.css";

function ShowCard() {
    return (
        <div className={styles.card}>
            <CardImage />
            <CardFooterName />
            <CardFooterIcon />
        </div>
    );
}

export default ShowCard;
