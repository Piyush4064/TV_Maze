import React, { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Button from "../../atom/button";

import movieNavData from "./MovieNav.routes";

import styles from "./movienav.module.css";

function MovieNav() {
    const { id, name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const onNavClick = useCallback(
        (link) => {
            const locationPath = "/show/" + id + "/" + name + link;
            navigate(locationPath);
        },
        [id, name, navigate]
    );

    const getActiveLink = useCallback(
        (link) => {
            const locationPath = "/show/" + id + "/" + name + link;

            if (locationPath === location.pathname) {
                return true;
            }

            return false;
        },
        [id, location.pathname, name]
    );

    return (
        <div className={styles.movienav}>
            {movieNavData.map((data) => (
                <Button
                    key={data.name}
                    type={getActiveLink(data.link) ? "movienavactive" : "movienavbtn"}
                    onClick={() => onNavClick(data.link)}
                >
                    {data.name}
                </Button>
            ))}
        </div>
    );
}

export default React.memo(MovieNav);
