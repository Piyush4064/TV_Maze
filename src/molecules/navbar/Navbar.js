import React, {useCallback} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../atom/button";

import navbarRoutes from "./navbar.routes";

import styles from "./navbar.module.css";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const onNavClick = useCallback((link) => {
        navigate(link);
    }, [navigate]);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__navLinks}>
                {navbarRoutes.map((nav) => (
                    <Button
                        key={nav.name}
                        type={location.pathname === nav.link ? 'navbarActive' : 'navbarbtn'}
                        onClick={() => onNavClick(nav.link)}
                    >
                        {nav.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default React.memo(Navbar);
