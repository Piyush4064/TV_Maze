import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from "./navBarEpisode.module.css";

function NavBarEpisode({ seasons }) {
    let data = seasons.slice().reverse();
    return (
        <nav className={styles.navBarEpisode}>
            {data.map((item) => {
                return (
                    // Active styling
                    <AnchorLink href={"#S" + item.number}>
                        <span className={styles.navBarEpisode__Season}>
                            {"S" + item.number}
                        </span>
                    </AnchorLink>
                );
            })}
        </nav>
    );
}

export default NavBarEpisode;
