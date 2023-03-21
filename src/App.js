import "./App.css";
import Header from "./organism/header";
import Navbar from "./molecules/navbar";
import Breadcrumb from "./molecules/breadcrumb";
import Show from "./pages/shows";
import People from "./pages/people/Index";


function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumb />
            <Show />
            <People />
        </div>
    );
}

export default App;