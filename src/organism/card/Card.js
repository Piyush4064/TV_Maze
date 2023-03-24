import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { getURL } from "./helper";
import Icon from "../../atom/icon";
import { IMG_PLACEHOLDER } from "./constant";
import { replaceSpaceWithDash } from "../../helper";
import localStorageImage from "../../assets/images.png";

import styles from "./card.module.css";

function Card({
    showFooterIcon = true,
    follow = false,
    favourite = true,
    showFooterName = true,
    item,
    requestFrom,
    onFavourite
}) {
    const name = replaceSpaceWithDash(item?.name);
    const [imgLoaded, setImgLoaded] = useState(false);

    let URL = useLocation().pathname;
    URL = getURL(URL, requestFrom, item, name);

    return (
        <div className={styles.card}>
            <Link to={URL}>
                {imgLoaded ? null : (
                    <img
                        src={localStorageImage}
                        alt="placeholder"
                        className={styles.maxHeight}
                    />
                )}
                <img
                    src={item?.image?.medium || IMG_PLACEHOLDER}
                    alt="movie"
                    className={!showFooterName && !showFooterIcon && styles.maxHeight}
                    style={imgLoaded ? {} : { display: "none" }}
                    onLoad={() => setImgLoaded(true)}
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
                        <Icon className="fa-regular fa-heart" onClick={onFavourite}/>
                        {favourite && (
                            <div>
                                <Icon className="fa-regular fa-star " />
                                <span>{item?.rating.average}</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.card__footer}>
                        <span className={styles.moviePosterCardFooter}onClick={onFavourite} >
                            <Icon className="fa-solid fa-heart" />
                            <span>Follow</span>
                        </span>
                    </div>
                ))}
        </div>
    );
}

Card.propTypes = {
    showFooterIcon: PropTypes.bool,
    follow: PropTypes.bool,
    favourite: PropTypes.bool,
    showFooterName: PropTypes.bool,
    item: PropTypes.object,
    requestFrom: PropTypes.string,
    onFavourite: PropTypes.func
};

Card.defaultProps = {
    showFooterIcon: true,
    follow: false,
    favourite: true,
    showFooterName: true,
    item: {},
    requestFrom: "",
};

export default React.memo(Card);
