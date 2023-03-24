import "./App.css";
import Header from "./organism/header";
import Navbar from "./molecules/navbar";
import Breadcrumb from "./molecules/breadcrumb";
import Show from "./pages/shows";
import Shows from "./pages/shows/shows/Shows";
import People from "./pages/people/Index";
import Favourite from './pages/favourite';
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumb />
            <Routes>
                <Route path="/" element={<Shows />}/>
            </Routes>
            <Show />
            <People />
            <Favourite />
        </div>
    );
}

export default App;