import React, { useEffect, useState } from "react";

import { fetchGetRequest } from "../../../api/api";
import NavBarEpisode from "../../../molecules/navBarEpisode";
import ShowDetails from "../../../templates/showDetails";
import Table from "../../../organism/table";
import { useParams } from "react-router-dom";

import styles from "./episode.module.css";

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

export default React.memo(Episode);
