import './App.css';
import "./index.css";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./modules/home/Home";
import Starships from "./modules/starships/Starships";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import People from "./modules/people/People";
import Info from "./modules/info/Info";

function App() {
    return (
            <DefaultLayout>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/starships" element={<Starships/>}/>
                        <Route exact path="/people" element={<People/>}/>
                        <Route exact path="/info" element={<Info/>}/>
                    </Routes>
                </Router>
                <ToastContainer/>
            </DefaultLayout>
    )
        ;
}

export default App;
