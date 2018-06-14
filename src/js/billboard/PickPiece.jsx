import React from 'react';


const PickPiece = ({onNext, arts, chosenArt, onSelect, chosenPiece, isSelected, currentPage, stappen, onBack}) => {

  const selected = false;

  const backgroundImage = {
    backgroundImage: 'url(' + './assets/img/artworks/' + chosenArt.image +'.png' + ')',
  };

  const handleSelect = (stuk, id) => {
    console.log(id);
    onSelect(stuk, id);
  }

  const renderDots = (stuk, id) => {

    return (
      <div
        key={id}
        className="pieceDot"
        style={{left: stuk.x, top: stuk.y}}
        onClick={()=>handleSelect(stuk, stuk.id)}
      >{console.log(id)}</div>
    );
  }

  const renderDetail = (stuk, id) => {

    return (
      <div key={id}>
        <p>{stuk.info}</p>
        <img src="./assets/img/confirm.svg" alt="confirm" className="check" onClick={onNext} />
      </div>
    );
  }

  return (
    <section className="chooseArt">
    {/* {console.log(chosenArt)} */}
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
        {(Object.keys(chosenArt.stukken).map(id => renderDots(chosenArt.stukken[id], id)))}
      </article>

      <article className="appTxt">
        {(isSelected ? (
          (Object.keys(chosenPiece).map(id => renderDetail(chosenPiece[id], id)))
        ) : (
          <p>Selecteer een bolletje om meer info en verder te gaan</p>
        ))}
      </article>

      {console.log(chosenArt.stukken[1])}
    </section>


  );
}

export default PickPiece;
