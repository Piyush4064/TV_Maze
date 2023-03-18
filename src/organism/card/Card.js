import React, { useEffect, useState } from "react";

import { Icon } from "../../atom";
import { Link, useLocation } from "react-router-dom";

import styles from "./card.module.css";

function Card({
    showFooterIcon = true,
    follow = false,
    favourite = true,
    showFooterName = true,
    item,
    requestFrom,
}) {
    const [name, setName] = useState("");
    useEffect(() => setName(item?.name?.replace(/ /g, "-")), [item?.name]);

    let URL = useLocation().pathname;
    if (requestFrom === "people") {
        URL = "/people/" + item.id + "/" + name;
    } else if (requestFrom === "show") {
        URL = "/show/" + item.id + "/" + name;
    }

    return (
        <div className={styles.card}>
            <Link to={URL}>
                <img
                    src={item?.image?.medium}
                    alt="movie"
                    className={!showFooterName && !showFooterIcon && styles.maxHeight}
                />
            </Link>

            {showFooterName && (
                <div>
                    <div className={styles.movieName}>{item?.name}</div>
                </div>
            )}

            {showFooterIcon &&
                (follow === false ? (
                    <div className={styles.cardFooter}>
                        <Icon classes="fa-regular fa-heart" />
                        {favourite && (
                            <div>
                                <Icon classes="fa-regular fa-star " />
                                <span>{item.rating.average}</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.cardFooter}>
                        <span className={styles.moviePosterCardFooter}>
                            <Icon classes="fa-solid fa-heart" />
                            <span>Follow</span>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Card;
