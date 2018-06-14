import React from 'react';
import {Link } from 'react-router-dom';

const Afronden = ({posts}) => {

  return (
    <section className="postPage">
      {/* <div className="appHeader appHeaderImportant">
        <h4>Afronden en delen!</h4>

        <div className="appHeaderPage">
          <p>4/4</p>
        </div>
      </div> */}

      <div className="canvas ">
        <div className="canvas_bedankt">
          {posts.map((post, i) => (
            <img alt="kunstwerk"
              key={i}
              className="kunstwerkimg"
              style={{transform: `translate(${post.x}px, ${post.y}px) `, "opacity": 1}}
              src={"./assets/img/artworks/" + post.name + ".png"
          }/>
          ))}
        </div>

      </div>

      <div className="bedanktPageTxt">
          <h4>Bedankt</h4>
          <p>Dit kunstwerk zal tentoongesteld worden bij de heropening van het Boijmans van Beuningen museum!</p>

          <p className="bedanktDisclaimer">Je kan ondertussen de afgewerkte kunstwerken bekijken op onze website.</p>

          <div className="afrondenBtn">
            <Link to="/kunstwerken"><button className="button button_geel bedankt_button" >Bekijk alle kunstwerken</button></Link>
            <br/>
            <Link to="/locaties"><p className="secondaryButton">Zoek andere billboards</p></Link>
          </div>
      </div>
    </section>
  );
}

export default Afronden;
