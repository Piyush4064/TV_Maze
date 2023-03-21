import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Info from "../../../templates/info";
import KnownForShows from "../../../templates/knownForShows";
import styles from "./peopleinfo.module.css";

function PeopleInfo() {
    const [personDetails, setPersonDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/people/" + id + "?embed=castcredits";

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setPersonDetails(data);
            });
    }, [URL]);

    return (
        <div className={styles.peopleInfo}>
            <h1 className={styles.peopleInfo__title}>{personDetails.name}</h1>
            <Info item={personDetails} />
            <KnownForShows castcredits={personDetails?._embedded?.castcredits} />
        </div>
    );
}

export default PeopleInfo;
