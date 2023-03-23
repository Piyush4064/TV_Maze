import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchGetRequest } from "../../../api/api";
import Info from "../../../templates/info";
import ShowDetails from "../../../templates/showDetails";
import {SHOW_FLASHCARD_KEYS_MAP} from "./config"

function Main() {
    const [showDetails, setShowDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/shows/" + id;

    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            setShowDetails(data);
        })();
    }, [URL]);
    return (
        <ShowDetails showTitle={showDetails.name}>
            <Info item={showDetails} summary={showDetails.summary} flashCardDetails={SHOW_FLASHCARD_KEYS_MAP} flashCardFor="Show"/>
        </ShowDetails>
    );
}

export default React.memo(Main);
