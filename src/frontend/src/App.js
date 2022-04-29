import React from 'react'; // eslint-disable-next-line
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./components/homepage.component";
import CreatePenyakit from "./components/create-penyakit.component";
import TesDNA from "./components/tesdna.component";
import CheckDataTes from "./components/check-datates.component";

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/penyakit" element={<CreatePenyakit/>} />
        <Route path="/prediksi" element={<TesDNA/>} />
        <Route path="/hasil" element={<CheckDataTes/>} />
      </Routes>
      </div>
      <div className="footer">
      © 2022 Reja Impact & Friends
      </div>
    </Router>
  );
}

export default App;
