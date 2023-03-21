import React, { useEffect, useState } from "react";

import { Icon } from "../../atom";
import { Link, useLocation } from "react-router-dom";

import styles from "./card.module.css";

const IMG_PLACEHOLDER =
    "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";

function Card({
    showFooterIcon = true,
    follow = false,
    favourite = true,
    showFooterName = true,
    item,
    requestFrom,
}) {
    const [name, setName] = useState("");
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => setName(item?.name?.replace(/ /g, "-")), [item?.name]);

    let URL = useLocation().pathname;
    if (requestFrom === "people" || requestFrom === "cast") {
        URL = "/people/" + item.id + "/" + name;
    } else if (requestFrom === "show" || requestFrom === "knownForShows") {
        URL = "/show/" + item.id + "/" + name;
    } 

    return (
        <div className={styles.card}>
            <Link to={URL}>
                {/* {imgLoaded ? null : (
                    <img
                        src="images.png"
                        alt="placeholder"
                        className={styles.maxHeight}
                    />
                )} */}
                <img
                    src={item?.image?.medium || IMG_PLACEHOLDER}
                    alt="movie"
                    className={!showFooterName && !showFooterIcon && styles.maxHeight}
                    loading="lazy"
                    // style={imgLoaded ? {} : { display: "none" }}
                    // onLoad={() => setImgLoaded(true)}
                />
            </Link>

            {showFooterName && (
                <div>
                    <div className={styles.card__movieName}>
                        {item?.name?.length > 23
                            ? item?.name?.slice(0, 23) + "..."
                            : item?.name}
                    </div>
                </div>
            )}

            {showFooterIcon &&
                (follow === false ? (
                    <div className={styles.card__footer}>
                        <Icon classes="fa-regular fa-heart" />
                        {favourite && (
                            <div>
                                <Icon classes="fa-regular fa-star " />
                                <span>{item?.rating.average}</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.card__footer}>
                        <span className={styles.moviePosterCardFooter}>
                            <Icon classes="fa-solid fa-heart" />
                            <span>Follow</span>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default React.memo(Card);
