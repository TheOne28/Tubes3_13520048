import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background: #222831;
    color: #EEEEEE;
    padding: 15px 45px;
    border-radius: 25px;
    border-color: #00ADB5;
    cursor: pointer;
    margin: 10px 0px;
    transition: ease 0.25s;
    &:hover {
        background: #00ADB5;
        color: #222831;
`

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <h1 className="title-homepage">Check Your DNA for Disease Here!</h1>
                <div>
                    <Link to="/prediksi">
                        <Button>
                            Check for Disease
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/hasil">
                        <Button>
                            View Check History
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/penyakit">
                        <Button>
                            Upload New Disease
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}