import React, {useCallback, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../atom/button";

import navbarRoutes from "./navbar.routes";

import styles from "./navbar.module.css";
import { useWindowDimension } from "../../util";
import Icon from "../../atom/icon/Icon";

function NavbarBtn(){
    const navigate = useNavigate();
    const location = useLocation();

    const onNavClick = useCallback((link) => {
        navigate(link);
    }, [navigate]);

    return(
    <>
        {navbarRoutes.map((nav) => (
                    <Button
                        key={nav.name}
                        type={location.pathname === nav.link ? 'navbarActive' : 'navbarbtn'}
                        onClick={() => onNavClick(nav.link)}
                    >
                        {nav.name}
                    </Button>
        ))}
    </>)
}

function Navbar() {
    const windowDimension = useWindowDimension();
    const [isNavbarShow, setNavbarShow] =  useState(false);
    const navbar = NavbarBtn();

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__navLinks}>
                {windowDimension.width < 760 && ( 
                    <Button type="navbarbtn"  onClick={() => setNavbarShow(!isNavbarShow)} > 
                        <Icon className="fa-solid fa-ellipsis-h"/>
                    </Button> 
                )}

                {windowDimension.width >= 760 ? navbar  : isNavbarShow && navbar }
            </div>
        </div>
    );
}

export default React.memo(Navbar);
