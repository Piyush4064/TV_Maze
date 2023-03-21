import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumb.module.css";

function Breadcrumb() {
    const location = useLocation();
    const [breadCrumbRoute, setBreadCrumbRoute] = React.useState([
        { name: "Home", link: "/" },
    ]);

    React.useEffect(() => {
        const pathParser = () => {
            var urlPath = location.pathname.split("/");
            const pathlist = [];

            urlPath.forEach((path) => {
                if (path === "") {
                    pathlist.push({ name: "Home", link: "/" });
                } else {
                    const lastele = pathlist[pathlist.length - 1];
                    const nextlink = lastele.link + path + "/";
                    pathlist.push({ name: path, link: nextlink });

                    setBreadCrumbRoute(pathlist);
                }
            });
        };

        pathParser();
    }, [location]);

    console.log(breadCrumbRoute);

    return (
        <nav aria-label="Breadcrumb" class={styles.breadcrumb}>
            <ul>
                {breadCrumbRoute.map((route) => (
                    <li key={route.name}>
                        {" "}
                        <Link href={route.link}>{route.name}</Link>
                    </li>
                ))}
                {/* <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">Category</Link>
                    </li>
                    <li>
                        <Link href="#">Sub Category</Link>
                    </li>
                    <li>
                        <Link href="#">Type</Link>
                    </li>
                    <li>
                        <span aria-current="page">Product</span>
                    </li> */}
            </ul>
        </nav>
    );
}

export default Breadcrumb;
