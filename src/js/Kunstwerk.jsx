import React from 'react';
import {Link} from 'react-router-dom'

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

        <Link to="/" className="button kunstwerk_button">Bekijken</Link>
    </article>

  );
}

export default Kunstwerk;
