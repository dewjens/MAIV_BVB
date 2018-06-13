import React, { Component } from 'react';
import firebase from 'firebase';
//import firestore from 'firebase/firestore';
import Form from '../components/form.js';
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

class ImageApp extends Component {
  constructor(props) {
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
    const chosenPiece = this.props.arts[this.props.chosenArt].stukken[this.props.chosenPieceNr];
    console.log(chosenPiece);

    return (
      <div className="App">
        <Form chosenPiece={chosenPiece}/>
        <div className="canvas">
            {this.state.posts.map((post, i) => (
              <Draggable
                defaultPosition={{x:Number(post.x), y: Number(post.y)}}
                bounds={'.canvas'}>
                  <img alt="kunstwerk" key={i} className="kunstwerkimg" src={"./assets/img/artworks/" + post.name + ".png"}/>
              </Draggable>
            ))}
        </div>

      </div>

    );
  }
}

export default ImageApp;
