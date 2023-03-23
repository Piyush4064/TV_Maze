import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { replaceSpaceWithDash } from "../../helper";

import styles from "./castInfo.module.css";

function CastInfo({ item }) {
    const name = replaceSpaceWithDash(item?.person?.name);
    const URL = "/people/" + item?.person?.id + "/" + name;

    return (
        <div className={styles.castInfo}>
            <h2 className={styles.castInfo__name}>
                <Link to={URL}>{item?.person?.name}</Link>
            </h2>
            {" as "}
            <Link to="#">{item?.character?.name}</Link>
        </div>
    );
}

CastInfo.propTypes = {
    item: PropTypes.object,
};

CastInfo.defaultProps = {
    item: {},
};

export default React.memo(CastInfo);
