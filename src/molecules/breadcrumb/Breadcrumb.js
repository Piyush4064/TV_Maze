import React from "react";
import { Link } from "react-router-dom";
import styles from "./breadcrumb.module.css";

function Breadcrumb() {
    return (
        <div>
            <nav aria-label="Breadcrumb" class={styles.breadcrumb}>
                <ul>
                    <li>
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
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumb;
