import React from 'react';
import Kunstwerk from './Kunstwerk.jsx';
import Footer from './FooterComponent.jsx';

const KunstwerkenComponent = () => {
  return (
    <div className="kunstwerkenContainer">
      <section className="page-header">
        <h2>Kunstwerken die compleet zijn door jullie</h2>
      </section>

      <section className="kunstwerken">
        <Kunstwerk />
        <Kunstwerk />
        <Kunstwerk />
      </section>

      <Footer />
    </div>
  );
}

export default KunstwerkenComponent;
