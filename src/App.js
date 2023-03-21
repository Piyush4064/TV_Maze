import "./App.css";
import Header from "./organism/header";
import Navbar from "./molecules/navbar";
import Breadcrumb from "./molecules/breadcrumb";
import Show from "./pages/shows";
// import ShowInfo from "./templates/showInfo";
// import Episode from "./templates/episode";
// import Season from "./templates/season";
// import PersonInfo from "./templates/personInfo";
// import { Routes, Route } from "react-router-dom";
// import Cast from "./templates/cast";
// import People from "./templates/people";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumb />
            <Show />
            {/* <Routes>
                <Route index element={<Show />} />
                <Route path="show" element={<Show />} />
                <Route path="show/:id/:name" element={<ShowInfo />} />
                <Route path="show/:id/:name/cast" element={<Cast />} />
                <Route path="show/:id/:name/episodes" element={<Episode />} />
                <Route path="show/:id/:name/seasons" element={<Season />} />
                <Route path="people" element={<People />} />
                <Route path="people/:id/:name" element={<PersonInfo />} />
            </Routes> */}
        </div>
    );
}

export default App;