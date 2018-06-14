import React from 'react';

const Kunstwerk = () => {
  return (
    <article className="kunstwerk">
        <img src="./assets/img/kusntwerk.png" alt="kunstwerk"/>

        <div className="kunstwerkInfo">
            <p><span>bushalte</span></p>
            <p>Nieuw binnenweg</p>
            <p>3014 GB  Rotterdam</p>
        </div>

        <p className="kunstwerkName">Paard van je moeder</p>

        <a className="button kunstwerk_button">Bekijken</a>
    </article>

  );
}

export default Kunstwerk;
