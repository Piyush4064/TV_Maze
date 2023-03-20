import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from "./navBarEpisode.module.css";

function NavBarEpisode({ seasons }) {
    let data = seasons.slice().reverse();
    return (
        <nav className={styles.navbar}>
            {data.map((item) => {
                return (
                    <AnchorLink href={"#S" + item.number}>
                        <span>{"S" + item.number}</span>
                    </AnchorLink>
                );
            })}
        </nav>
    );
}

export default NavBarEpisode;
