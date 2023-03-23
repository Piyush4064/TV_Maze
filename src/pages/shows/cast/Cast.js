import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../../../organism/card";
import CastInfo from "../../../molecules/castInfo";
import { fetchGetRequest } from "../../../api/api";
import ShowDetails from "../../../templates/showDetails";

import styles from "./cast.module.css";

function Cast() {
    const { id, name } = useParams();
    const [cast, setCast] = useState([]);
    const URL = "https://api.tvmaze.com/shows/" + id + "/cast";
    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            setCast(data);
        })();
    }, [URL, id]);
    return (
        <ShowDetails showTitle={name}>
            <div className={styles.cast}>
                {cast.map((item) => {
                    return (
                        <div className={styles.cast__detail}>
                            <Card
                                showFooterIcon={false}
                                showFooterName={false}
                                item={item.person}
                                requestFrom="cast"
                            />
                            <CastInfo item={item} />
                        </div>
                    );
                })}
            </div>
        </ShowDetails>
    );
}

export default React.memo(Cast);
