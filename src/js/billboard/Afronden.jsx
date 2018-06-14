import React from 'react';
import {Link } from 'react-router-dom'

const Afronden = ({posts}) => {

  return (
    <section className="canvasContainer">
      {/* <div className="appHeader appHeaderImportant">
        <h4>Afronden en delen!</h4>

        <div className="appHeaderPage">
          <p>4/4</p>
        </div>
      </div> */}

      <div className="canvas canvas_smaller">
        {posts.map((post, i) => (
          <img alt="kunstwerk"
            key={i}
            className="kunstwerkimg"
            style={{transform: `translate(${post.x}px, ${post.y}px) `, "opacity": 1}}
            src={"./assets/img/artworks/" + post.name + ".png"
        }/>
        ))}

        <div className="afrondenTxt">
          <h4>Je bent een natuurtalent!</h4>
          <p>We willen jouw naam nog bij dit kunstwerk zetten zodat iedereen weet dat jij hier aan hebt meegewerkt! </p>
        </div>

         <div className="afrondenBtn">
            <button className="button button_geel">Ja mijn naam mag er bij!</button>
            <br/>
            <Link to="/"><p>Nee ik wil anoniem blijven</p></Link>
          </div>

      </div>


    </section>
  );
}

export default Afronden;
