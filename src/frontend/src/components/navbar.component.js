import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/" className="navbar-brand">StimaBarokah</Link>
              <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/penyakit" className="nav-link">Create Penyakit</Link>
                </li>
                <li className="navbar-item">
                <Link to="/prediksi" className="nav-link">Tes DNA</Link>
                </li>
                <li className="navbar-item">
                <Link to="/hasil" className="nav-link">Check Data Tes</Link>
                </li>
              </ul>
              </div>
            </nav>
          );
    }
}