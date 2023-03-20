import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Breadcrumb from "./molecules/breadcrumb/Breadcrumb";
import Show from "./components/show/Show";
import ShowInfo from "./components/showInfo/ShowInfo";
import Episode from "./components/episode/Episode";
import Season from "./components/season/Season";
import PersonInfo from "./components/personInfo/personInfo";

import { Routes, Route } from "react-router-dom";
import Cast from "./components/cast/Cast";
import People from "./components/people/People";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumb />
            <Routes>
                <Route index element={<Show />} />
                <Route path="show" element={<Show />} />
                <Route path="show/:id/:name" element={<ShowInfo />} />
                <Route path="show/:id/:name/cast" element={<Cast />} />
                <Route path="show/:id/:name/episodes" element={<Episode />} />
                <Route path="show/:id/:name/seasons" element={<Season />} />
                <Route path="people" element={<People />} />
                <Route path="people/:id/:name" element={<PersonInfo />} />
            </Routes>
        </div>
    );
}

export default App;
