import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchGetRequest } from "../../../api/api";
import Info from "../../../templates/info";
import KnownForShows from "../../../templates/knownForShows";
import { PEOPLE_FLASHCARD_KEYS_MAP } from "./config";

import styles from "./peopleinfo.module.css";

function PeopleInfo() {
    const [personDetails, setPersonDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/people/" + id + "?embed=castcredits";

    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            setPersonDetails(data);
        })();
    }, [URL]);

    return (
        <div className={styles.peopleInfo}>
            <h1 className={styles.peopleInfo__title}>{personDetails.name}</h1>
            <Info
                item={personDetails}
                flashCardDetails={PEOPLE_FLASHCARD_KEYS_MAP}
                flashCardFor="Person"
            />
            {personDetails?._embedded?.castcredits.length > 0 && (
                <KnownForShows castcredits={personDetails?._embedded?.castcredits} />
            )}
        </div>
    );
}

export default React.memo(PeopleInfo);
