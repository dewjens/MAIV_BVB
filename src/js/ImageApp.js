import React, { Component } from 'react';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import Form from './components/form.js';
import Draggable from 'react-draggable'; // Both at the same time

let Ref;

class ImageApp extends Component {
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
      <div className="App">
        <Form />
        <div className="canvas">
            {this.state.posts.map((post, i) => (
              <Draggable key={i}
              onStart={() => false}
              defaultPosition={{x:Number(post.x), y: Number(post.y)}}
              bounds={'.canvas'}>
                <img alt="kunstwerk" key={i}className="kunstwerkimg" src={"../../assets/img/" + post.name}/>
              </Draggable>
            ))}
        </div>

      </div>

    );
  }
}

export default ImageApp;
