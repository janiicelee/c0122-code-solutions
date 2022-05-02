import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pokedex = [
  {
    id: 1,
    image: '../images/001.png'
  },
  {
    id: 2,
    image: '../images/004.png'
  },
  {
    id: 3,
    image: '../images/007.png'
  },
  {
    id: 4,
    image: '../images/025.png'
  },
  {
    id: 5,
    image: '../images/039.png'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Carousel data={pokedex} />
);
