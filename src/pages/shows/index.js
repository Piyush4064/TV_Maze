import React from "react";
import Shows from "./shows/Shows";
import Cast from "./cast/Cast";
import Episode from "./episode/Episode";
import Season from "./season/Season";
import ShowInfo from "./showInfo/ShowInfo";
import { Route, Routes } from "react-router-dom";

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
