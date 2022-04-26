import React from 'react'; // eslint-disable-next-line
import logo from './logo.svg'; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import HomePage from "./components/homepage.component";
import CreatePenyakit from "./components/create-penyakit.component";
import TesDNA from "./components/tesdna.component";
import CheckDataTes from "./components/check-datates.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/createpenyakit" component={CreatePenyakit} />
        <Route path="/tesdna" component={TesDNA} />
        <Route path="/checkdatates" component={CheckDataTes} />
      </Routes>
    </Router>
    //<h1>Wanjing</h1>
  );
}

export default App;
