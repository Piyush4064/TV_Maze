import React, { useEffect, useState } from "react";

import Table from "../../../organism/table/Table";
import NavBarEpisode from "../../../molecules/navBarEpisode/NavBarEpisode";
import { useParams } from "react-router-dom";
import ShowDetails from "../../../templates/showDetails/ShowDetails";
import styles from "./episode.module.css";
import { fetchGetRequest } from "../../../api/api";

function Episode() {
    const { id, name } = useParams();
    const [seasons, setSeasons] = useState([]);
    const URL = "https://api.tvmaze.com/shows/" + id + "/seasons";
    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            data.reverse();
            setSeasons(data);
        })();
    }, [URL, id]);

    return (
        <ShowDetails showTitle={name}>
            <NavBarEpisode seasons={seasons} />
            {seasons.map((item) => {
                return (
                    <div className={styles.episode} id={"S" + item.number}>
                        <h2 className={styles.episode__seasonNumber}>
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
