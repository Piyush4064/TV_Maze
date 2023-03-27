import React from "react";

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

export default FavouritePlaceholder;
