import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { getURL } from "./helper";
import Icon from "../../atom/icon";
import { replaceSpaceWithDash } from "../../helper";
import loadingImage from "../../assets/images.png";
import noImage from "../../assets/no-Image.png";
import { trimName } from "./helper";

import styles from "./card.module.css";

function Card({
    showFooterIcon,
    follow,
    favourite,
    showFooterName,
    item,
    requestFrom,
    onFavourite,
    isFavourite  = false

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
                        src={loadingImage}
                        alt="placeholder"
                        className={styles.maxHeight}
                    />
                )}
                <img
                    src={item?.image?.medium || noImage}
                    alt="movie"
                    className={!showFooterName && !showFooterIcon && styles.maxHeight}
                    style={imgLoaded ? {} : { display: "none" }}
                    onLoad={() => setImgLoaded(true)}
                />
            </Link>

            {showFooterName && (
                <div>
                    <div className={styles.card__movieName}>{trimName(item.name)}</div>
                </div>
            )}
            {showFooterIcon &&
                (follow === false ? (
                    <div className={styles.card__footer}>
                      
                        {isFavourite === false ? <Icon className="fa-regular fa-heart" onClick={onFavourite}/> :
                        <Icon className="fa-solid fa-heart" onClick={onFavourite}/>
                        }
                        
                        {favourite && (
                            <div>
                                <Icon className="fa-regular fa-star " />
                                <span>{item?.rating?.average}</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.card__footer}>
                        <span
                            className={styles.moviePosterCardFooter}
                            onClick={onFavourite}
                        >
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
    onFavourite: PropTypes.func,
    isFavourite : PropTypes.bool
};

Card.defaultProps = {
    showFooterIcon: true,
    follow: false,
    favourite: true,
    showFooterName: true,
    item: {},
    requestFrom: "",
    onFavourite: () => null,
    isFavourite : true
};

export default React.memo(Card);
