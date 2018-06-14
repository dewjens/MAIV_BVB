import React from 'react';
import PropTypes from 'prop-types';

const Afronden = ({posts, onNext}) => {

  return (
    <section className="postPage">
      <div className="canvas">
        <div className="canvas_post">
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

      <div className="postPageTxt">
        <div className="buttonContainer">
          <button className="button button_geel" onClick={onNext}>Delen</button>
        </div>
        <div className="postImageContainer">
          <img src="./assets/img/avatar.png" alt="avatar" className="avatar" width="62" height="62"/>
        </div>
        <p>Ik heb geholpen met dit kunstwerk aan de bushalte van de stationsstraat!
          <br/>
          Wil jij ook mee doen? Surf dan naar <span>www.boijmansbillboards.nl</span>
        </p>
      </div>
    </section>
  );
}

Afronden.propTypes = {
  posts: PropTypes.object,
  onNext: PropTypes.func
}

export default Afronden;
