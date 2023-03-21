import React, { useEffect, useState } from "react";

import { Icon } from "../../atom";

import styles from "./table.module.css";

import { fetchGetRequest } from "../../api/api";

function Table({ seasonId }) {
    const [episodes, setEpisodes] = useState([]);
    const URL = "https://api.tvmaze.com/seasons/" + seasonId + "/episodes";
    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            data.reverse();
            setEpisodes(data);
        })();
    }, [URL, seasonId]);

    return (
        <div>
            <table class={styles.table}>
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
                    {episodes.map((item) => {
                        return (
                            item.number && (
                                <tr>
                                    <td>{item?.number}</td>
                                    <td>{item?.airdate}</td>
                                    <td>{item?.name}</td>
                                    <td>
                                        <Icon classes="fa-solid fa-star" />{" "}
                                        {item?.rating?.average}
                                    </td>
                                    <td>
                                        <Icon classes="fa-solid fa-cloud" />
                                        <Icon classes="fa-solid fa-eye" />
                                        <Icon classes="fa-solid fa-ban" />
                                    </td>
                                </tr>
                            )
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
