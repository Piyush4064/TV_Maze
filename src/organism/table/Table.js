import React from "react";

import { Icon } from "../../atom";

import styles from "./table.module.css";

function Table() {
    return (
        <div>
            <table class={styles.styled_table}>
                <thead>
                    <tr>
                        <th className={styles.number}>Number</th>
                        <th className={styles.date}>Date</th>
                        <th className={styles.name}>Name</th>
                        <th className={styles.score}>Score</th>
                        <th className={styles.status}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dec 27, 2019</td>
                        <td>Chapter 8: Redemption</td>
                        <td>
                            <i class="fa-solid fa-star"></i>
                            8.7
                        </td>
                        <td>
                            <Icon classes="fa-solid fa-cloud" />
                            <Icon classes="fa-solid fa-eye" />
                            <Icon classes="fa-solid fa-ban" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Dec 27, 2019</td>
                        <td>Chapter 8: Redemption</td>
                        <td>
                            <i class="fa-solid fa-star"></i>
                            8.7
                        </td>
                        <td>
                            <Icon classes="fa-solid fa-cloud" />
                            <Icon classes="fa-solid fa-eye" />
                            <Icon classes="fa-solid fa-ban" />
                        </td>
                    </tr>{" "}
                    <tr>
                        <td>1</td>
                        <td>Dec 27, 2019</td>
                        <td>Chapter 8: Redemption</td>
                        <td>
                            <i class="fa-solid fa-star"></i>
                            8.7
                        </td>
                        <td>
                            <Icon classes="fa-solid fa-cloud" />
                            <Icon classes="fa-solid fa-eye" />
                            <Icon classes="fa-solid fa-ban" />
                        </td>
                    </tr>{" "}
                    <tr>
                        <td>1</td>
                        <td>Dec 27, 2019</td>
                        <td>Chapter 8: Redemption</td>
                        <td>
                            <i class="fa-solid fa-star"></i>
                            8.7
                        </td>
                        <td>
                            <Icon classes="fa-solid fa-cloud" />
                            <Icon classes="fa-solid fa-eye" />
                            <Icon classes="fa-solid fa-ban" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
