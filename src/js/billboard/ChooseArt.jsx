import React from 'react';


const ChooseArt = ({onNext, arts, chosenArt}) => {

  const backgroundImage = {
    backgroundImage: 'url(' + './assets/img/artworks/' + chosenArt.image +'.png' + ')',
  };

  return (
    <section className="chooseArt">
    {console.log(chosenArt)}

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

export default ChooseArt;
