import React from 'react';
import PropTypes from 'prop-types';

const ChooseArt = ({onNext, arts, chosenArt, currentPage, stappen, onBack}) => {

  const backgroundImage = {
  backgroundImage: 'url(' + './assets/img/artworks/' + chosenArt.image +'.png' + ')',
};

  return (
    <section className="chooseArt">
    {console.log(chosenArt)}

      <div className="appHeader">
        <img
          src="./assets/img/arrow_back.png"
          alt="back arrow" onClick={onBack}
          className="arrowBack"
        />
        <h4>{stappen[currentPage].title}</h4>

        <div className="appHeaderPage">
          <p>{currentPage - 3 }/4</p>
        </div>
      </div>

      <article className="artImage" style={backgroundImage}>
      </article>

      <article className="appTxt">
        <p className="artArtist">{chosenArt.artist}</p>
        <p className="artName">{chosenArt.title}</p>

        <img src="./assets/img/confirm.svg" alt="confirm" className="check" onClick={onNext} />
      </article>
    </section>

  );
}

ChooseArt.propTypes = {
  onNext: PropTypes.func,
  arts: PropTypes.object,
  chosenArt: PropTypes.number,
  currentPage: PropTypes.number,
  stappen: PropTypes.object,
  onBack: PropTypes.func
}

export default ChooseArt;
