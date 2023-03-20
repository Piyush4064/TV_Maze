import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Breadcrumb from "./molecules/breadcrumb";
import Show from "./components/show/";
import ShowInfo from "./components/showInfo";
import Episode from "./components/episode";
import Season from "./components/season";
import PersonInfo from "./components/personInfo";

import { Routes, Route } from "react-router-dom";
import Cast from "./components/cast";
import People from "./components/people";

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
