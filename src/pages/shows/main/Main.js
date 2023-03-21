import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../../../templates/info";
import ShowDetails from "../../../templates/showDetails/ShowDetails";
import { fetchGetRequest } from "../../../api/api";

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
            <Info item={showDetails} summary={showDetails.summary} />
        </ShowDetails>
    );
}

export default Main;
