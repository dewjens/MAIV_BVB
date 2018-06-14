import React from 'react';


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

export default StartApp;
