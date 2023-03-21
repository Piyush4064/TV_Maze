import React, { useEffect, useState } from "react";

import styles from "./knownForShows.module.css";
import Card from "../../organism/card";

function KnownForShows({ castcredits }) {
    const [showDetail, setShowDetail] = useState([]);

    useEffect(() => {
        const data = castcredits?.slice(-4);
        async function getAllShowsData() {
            const tmpShowDetail = [];
            await Promise.all(
                data.map(async (item) => {
                    console.log("item", item);
                    const response = await fetch(item._links.show.href);
                    const result = await response.json();
                    tmpShowDetail.push(result);
                })
            );
            setShowDetail(tmpShowDetail);
        }
        getAllShowsData();
    }, [castcredits]);

    return (
        <div className={styles.knownForShows}>
            <h2 className={styles.knownForShows__title}>Known For</h2>
            <div className="container">
                {showDetail.map((item) => {
                    return (
                        <div className={styles.knownForShows__Card}>
                            <Card
                                favourite={false}
                                item={item}
                                requestFrom="knownForShows"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default KnownForShows;
