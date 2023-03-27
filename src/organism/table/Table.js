import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { fetchGetRequest } from "../../api/api";
import Icon from "../../atom/icon";
import { getUniqueKey } from "../../helper";

import styles from "./table.module.css";

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
            <table className={styles.table}>
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
                    {episodes.map((item, index) => {
                        return (
                            item.number && (
                                <tr key={getUniqueKey(index)}>
                                    <td>{item?.number}</td>
                                    <td>{item?.airdate}</td>
                                    <td>{item?.name}</td>
                                    <td>
                                        <Icon className="fa-solid fa-star" />{" "}
                                        {item?.rating?.average}
                                    </td>
                                    <td>
                                        <Icon className="fa-solid fa-cloud" />
                                        <Icon className="fa-solid fa-eye" />
                                        <Icon className="fa-solid fa-ban" />
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

Table.propTypes = {
    seasonId: PropTypes.number,
};

Table.defaultProps = {
    seasonId: 0,
};

export default React.memo(Table);
