import React from 'react';

const CoolComponent = ({ items }) => {
  return items.map(item => <p className="race" key={item}>{item}</p>)
}

export default CoolComponent;