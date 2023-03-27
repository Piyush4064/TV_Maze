import { Route, Routes } from "react-router-dom";

import Breadcrumb from "./molecules/breadcrumb";
import Favourite from "./pages/favourite";
import Footer from "./molecules/footer";
import Header from "./organism/header";
import Navbar from "./molecules/navbar";
import People from "./pages/people";
import Show from "./pages/shows";
import Shows from "./pages/shows/shows";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumb />
            <Routes>
                <Route path="/" element={<Shows />} />
            </Routes>
            <Show />
            <People />
            <Favourite />
            <Footer />
        </div>
    );
}

export default App;
