import React from "react";

import styles from "./cardFooterIcon.module.css";
import { Icon } from "../../atom";

function CardFooterIcon({ follow = "false", favourite="true" }) {
    return follow !== "true" ? (
        <div className={styles.cardFooter}>
            <Icon classes="fa-regular fa-heart" />
            {favourite==="true" && 
            <div>
                <Icon classes="fa-regular fa-star " />
                <span>8.6</span>
            </div>}
        </div>
    ) : (
        <div className={styles.cardFooter}>
            <span className={styles.moviePosterCardFooter}>
                <Icon classes="fa-solid fa-heart" />
                <span>Follow</span>
            </span>
        </div>
    );
}

export default CardFooterIcon;
