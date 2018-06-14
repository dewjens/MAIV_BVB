import React from 'react';
import PropTypes from 'prop-types';

const StartApp = ({currentPage, onBack, stappen}) => {

  return (
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

  );
}

StartApp.propTypes = {
  currentPage: PropTypes.number,
  onBack: PropTypes.func,
  stappen: PropTypes.object
}

export default StartApp;
