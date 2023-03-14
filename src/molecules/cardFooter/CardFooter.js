import React from "react";

import styles from "./cardFooter.module.css";
import { Icon } from "../../atom";

function CardFooter() {
    return (
        <div className={styles.cardFooter}>
            <Icon classes="fa-regular fa-heart" />
            <div>
                <Icon classes="fa-regular fa-star " />
                <span>8.6</span>
            </div>
        </div>
    );
}

export default CardFooter;
