import React, { useEffect, useState } from "react";

import Table from "../../../organism/table/Table";
import NavBarEpisode from "../../../molecules/navBarEpisode/NavBarEpisode";
import { useParams } from "react-router-dom";
import ShowDetails from "../../../templates/showDetails/ShowDetails";
import styles from "./episode.module.css";

function Episode() {
    const { id, name } = useParams();
    const [seasons, setSeasons] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/shows/" + id + "/seasons")
            .then((res) => res.json())
            .then((data) => {
                data.reverse();
                setSeasons(data);
            });
    }, [id]);

    return (
        <ShowDetails showTitle={name}>
            <NavBarEpisode seasons={seasons} />
            {seasons.map((item) => {
                return (
                    <div className={styles.episode}>
                        <h2 id={"S" + item.number} className={styles.episode__seasonNumber}>
                            Season {item.number}
                        </h2>
                        <Table seasonId={item.id} />
                    </div>
                );
            })}
        </ShowDetails>
    );
}

export default Episode;
