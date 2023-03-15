import React from "react";

import styles from "./peopleCard.module.css";

import CardImage from "../../molecules/cardImage/CardImage";
import CardFooterName from "../../molecules/cardFooterName/CardFooterName";
import CardFooterIcon from "../../molecules/cardFooterIcon/CardFooterIcon";

function PeopleCard() {
    return (
        <div className={styles.card}>
            <CardImage />
            <CardFooterName />
            <CardFooterIcon favourite="false" />
        </div>
    );
}

export default PeopleCard;
