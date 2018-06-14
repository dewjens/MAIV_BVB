import React, { Component } from 'react';
import firebase from 'firebase';

let Ref;
var config = {
  apiKey: "AIzaSyAUCTqRNa9qdPJT31pXeJJQLUUSNNQdw6A",
  authDomain: "billboardsbyboijmans.firebaseapp.com",
  databaseURL: "https://billboardsbyboijmans.firebaseio.com",
  projectId: "billboardsbyboijmans",
  storageBucket: "billboardsbyboijmans.appspot.com",
  messagingSenderId: "930811275069"
};

class Poster extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
    };

    this.getRealtimeUpdates = this.getRealtimeUpdates.bind(this);
  }

  getRealtimeUpdates() {
    Ref.onSnapshot(snap => {
      let newArr = [];
      snap.forEach(doc => {
        let name = doc.data().name;
        let x = doc.data().x;
        let y = doc.data().y;
        let time = doc.data().time;

        let post = ({
          name,
          x,
          y,
          time,
        });
        newArr.push(post);
      });
      newArr.sort((a,b) => {return a.time-b.time});
      this.setState(this.state.posts = newArr);
    });
  }

  componentWillMount() {
    Ref = firebase.firestore().collection("post");
    this.getRealtimeUpdates();
  }

  componentDidMount() {
    console.log(this.props.location.pathname);

    this.props.onLoad(this.props.location.pathname);
  }

  render() {
    const {posts} = this.state;

    return (
      <section className="poster">

       <div className="tile-bar">
        <article class="titlediv">
          <h2 className="toscan"><span class="yellow">collaborative</span> billboards</h2>
          <h3 class="toscansub">by boijmans</h3>
        </article>
      </div>

       <div className="canvas">
        <div className="canvas_poster">
          {posts.map((post, i) => (
            <img alt="kunstwerk"
              key={i}
              className="kunstwerkimg"
              style={{transform: `translate(${post.x}px, ${post.y}px)`, "opacity": 1}}
              src={"./assets/img/artworks/" + post.name + ".png"
          }/>
          ))}
        </div>
      </div>

        <div className="qr-bar">
          <article class="qr-desc">
            <h2 className="toscan">to scan or not to scan</h2>
            <span className="scantext">ontdek alle werken op <span class="yellow">www.boijmansbillboards.com </span> of scan de qr-code om zelf deel te nemen</span>
          </article>

          <img className="qrimg" src="../../assets/img/qr.png" height="150" width="150" />
        </div>
      </section>

    );
  }
}

export default Poster;
