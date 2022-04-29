import React, { Component, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 45px;
  cursor: pointer;
  opacity: 0.6;
  background: #222831;
  color: #EEEEEE;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #00ADB5;
    opacity: 1;
  `}
`;

function TabGroup() {
  const Navigate = useNavigate();
  const [active, setActive] = useState(where[useLocation().pathname]);
  return (
    <div>
      {types.map(type => (
        <Button
          key={type}
          active={active === type}
          onClick={() => {
            Navigate('/' + dest[type], {replace: true});
            setActive(type);}}
        >
          {type}
        </Button>
      ))}
    </div>
  );
}

const types = ['Home', 'Test', 'Search', 'Upload'];
const dest = {
  'Home': '',
  'Test': 'prediksi',
  'Search': 'hasil',
  'Upload': 'penyakit'
}
const where = {
  '/': 'Home',
  '/prediksi': 'Test',
  '/hasil': 'Search',
  '/penyakit': 'Upload'
}

export default class Navbar extends Component {
    render(){
        return (
            <div className='header'>
                <TabGroup />
            </div>
          );
    }
}