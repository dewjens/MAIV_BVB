import React from 'react';
import Kunstwerk from './Kunstwerk.jsx';

const KunstwerkenComponent = () => {
  return (
    <div className="kunstwerkenContainer">
      <section className="pagHeader">
        <h2>Kunstwerken die compleet zijn door jullie</h2>
      </section>

      <section className="kunstwerken">
        <Kunstwerk />
        <Kunstwerk />
        <Kunstwerk />
      </section>
    </div>
  );
}

export default KunstwerkenComponent;
