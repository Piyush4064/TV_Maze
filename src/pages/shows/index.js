import React from "react";
import { Route, Routes } from "react-router-dom";

import Cast from "./cast";
import Episode from "./episode";
import Season from "./season";
import ShowInfo from "./showInfo";
import Shows from "./shows";

function ShowIndex() {
    return (
        <Routes>
            <Route path="show">
                <Route index element={<Shows />} />
                <Route path=":id/:name">
                    <Route index element={<ShowInfo />} />
                    <Route path="cast" element={<Cast />} />
                    <Route path="episodes" element={<Episode />} />
                    <Route path="seasons" element={<Season />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default ShowIndex;
