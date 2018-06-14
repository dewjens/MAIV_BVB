import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Facebook = ({onNext}) => {

  return (
    <section className="facebookContainer">
      <header>
        <img src="./assets/img/facebook.svg" alt="facebookLogo"/>
      </header>

      <article className="facebookTxt">
        <button className="button button_fb" onClick={onNext}>Ga door met facebook</button>
        <br/>
        <p className="facebookDisclaimer">Geen zorgen, wij hebben enkel je naam, foto en email-adres nodig!</p>
        <Link to="/"><p className="secondaryButton">Nee ik wil toch anoniem blijven</p></Link>
      </article>

    </section>
  );
}

Facebook.propTypes = {
  onNext: PropTypes.func
}

export default Facebook;
