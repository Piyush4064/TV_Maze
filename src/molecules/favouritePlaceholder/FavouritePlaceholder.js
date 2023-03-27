import React from "react";
import PropTypes from "prop-types";

import styles from "./favouritePlaceholder.module.css";

function FavouritePlaceholder({ favouritePlaceholderFor }) {
    return (
        <div className={styles.favouritePlaceholder}>
            <p className={styles.favouritePlaceholder__title}>
                Add your favourite {favouritePlaceholderFor}
            </p>
        </div>
    );
}

FavouritePlaceholder.propTypes = {
    requestFrom: PropTypes.string,
};

FavouritePlaceholder.defaultProps = {
    requestFrom: "",
};

export default React.memo(FavouritePlaceholder);
