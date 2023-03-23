import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {showPremiereDate} from "./helper";

import styles from "./seasonInfo.module.css";

function SeasonInfo({ item }) {
    return (
        <div className={styles.seasonInfo}>
            <h2 className={styles.seasonInfo__seasonNumber}>
                <Link to="#">Season {item.number}</Link>
            </h2>
            <h3 className={styles.seasonInfo__networkChannelAndYear}>
                <Link to="#">{item?.network?.name || item?.webChannel.name}</Link>,{" "}
                {item?.premiereDate !== null &&
                    showPremiereDate(item?.premiereDate, item?.endDate)}
            </h3>
            <p>
                <div dangerouslySetInnerHTML={{ __html: item.summary }} />
            </p>{" "}
        </div>
    );
}

SeasonInfo.propTypes = {
    item: PropTypes.object,
};

SeasonInfo.defaultProps = {
    item: {},
};

export default React.memo(SeasonInfo);
