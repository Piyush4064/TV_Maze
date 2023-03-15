import React from "react";

import styles from "./navBarEpisode.module.css"

function NavBarEpisode() {
    return (
        <nav className={styles.navbar}>
            <span>S01</span>
            <span>S02</span>
            <span>S03</span>
        </nav>
    );
}

export default NavBarEpisode;
