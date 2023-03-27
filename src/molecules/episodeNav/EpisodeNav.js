import React, { useMemo } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

import { reverseArray } from "./helper";
import { getUniqueKey } from "../../helper";

import styles from "./episodeNav.module.css";

function EpisodeNav({ seasons }) {
    let data = useMemo(() => reverseArray(seasons), [seasons]);

    return (
        <nav className={styles.episodeNav}>
            {data.map((item, index) => {
                return (
                    <AnchorLink href={"#S" + item.number} key={getUniqueKey(index)}>
                        <span className={styles.episodeNav__Season}>
                            {"S" + item.number}
                        </span>
                    </AnchorLink>
                );
            })}
        </nav>
    );
}

EpisodeNav.propTypes = {
    seasons: PropTypes.array,
};

EpisodeNav.defaultProps = {
    seasons: [],
};

export default React.memo(EpisodeNav);
