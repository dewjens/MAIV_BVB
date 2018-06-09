import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './ClassComponent.jsx';

const items = ["Amstel Gold Race", "Ronde van Spanje", "WK 1976", "WK 1981"];

ReactDOM.render(
  <ClassComponent items={items} />,
  document.getElementById('reactcontent')
);