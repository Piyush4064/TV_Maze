import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./cast.module.css";
import Card from "../../../organism/card/Card";
import CastInfo from "../../../molecules/castInfo"
import ShowDetails from "../../../templates/showDetails/ShowDetails";
function Cast() {
    const { id } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows/" + id + "/cast")
            .then((res) => res.json())
            .then((data) => {
                setCast(data);
            });
    }, [id]);
    return (
        <ShowDetails>
            <div className={styles.cast}>
                {cast.map((item) => {
                    return (
                        <div className={styles.castDetail}>
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

export default Cast;
