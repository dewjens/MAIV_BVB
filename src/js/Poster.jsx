import React, { Component } from 'react';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import Draggable from 'react-draggable'; // Both at the same time

let Ref;
var config = {
  apiKey: "AIzaSyAUCTqRNa9qdPJT31pXeJJQLUUSNNQdw6A",
  authDomain: "billboardsbyboijmans.firebaseapp.com",
  databaseURL: "https://billboardsbyboijmans.firebaseio.com",
  projectId: "billboardsbyboijmans",
  storageBucket: "billboardsbyboijmans.appspot.com",
  messagingSenderId: "930811275069"
  };

  firebase.initializeApp(config);
  firebase.firestore().enablePersistence();

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

  render() {
    return (
      <section className="poster">
      <div className="tile-bar">
        <article class="titlediv">
          <h2 className="toscan"><span class="yellow">collaborative</span> billboards</h2>
          <h3 className="toscansub">by boijmans</h3>
        </article>
      </div>

      <div className="center-canvas-2">
        <div className="canvas">
            {this.state.posts.map((post, i) => (
              <Draggable key={i}
              defaultPosition={{x:Number(post.x), y: Number(post.y)}}
              bounds={'.canvas'}>
                <img alt="kunstwerk" key={i} className="kunstwerkimg" src={"../../assets/img/" + post.name}/>
              </Draggable>
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
