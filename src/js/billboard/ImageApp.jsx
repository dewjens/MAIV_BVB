import React, { Component } from 'react';
import firebase from 'firebase';
//import firestore from 'firebase/firestore';
import Form from '../components/form.js';
import Draggable from 'react-draggable'; // Both at the same time
import Afronden from './Afronden.jsx';

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
      activeDrags: 0,
      controlledPosition: {
        x: 100, y: 200
      }
      ,currentPage: 6
    };
    this.getRealtimeUpdates = this.getRealtimeUpdates.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);

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

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
    console.log(this.state.controlledPosition);
  }

  handleSubmit(chosenPiece) {
    console.log("placed!");
    this.setState({currentPage: this.state.currentPage+1});

    const Post = ({
      name: chosenPiece.name,
      x: this.state.controlledPosition.x,
      y: this.state.controlledPosition.y,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    Ref.add(Post);
  }


  render() {
    const chosenPiece = this.props.arts[this.props.chosenArt].stukken[this.props.chosenPieceNr];
    //console.log(chosenPiece);

    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {controlledPosition, currentPage} = this.state;

    return (
      <div className="App">
        

       {(() => {
          switch (currentPage) {
            case 6: return(
              <div className="canvas">
                {this.state.posts.map((post, i) => (
                  <img alt="kunstwerk"
                    key={post.time}
                    className="kunstwerkimg"
                    style={{transform: `translate(${post.x}px, ${post.y}px)`, "opacity": .5}}
                    src={"./assets/img/artworks/" + post.name + ".png" 
                }/>
                ))}
      
                <Draggable
                  bounds={'.canvas'}
      
                  position={controlledPosition} {...dragHandlers} 
                  onDrag={this.onControlledDrag}
                >
                  <img alt="kunstwerk" className="kunstwerkimg" draggable="false" src={"./assets/img/artworks/" + chosenPiece.name + ".png"}/>
                </Draggable>
              
                <button type="button" className="confirmBtn" onClick={()=>this.handleSubmit(chosenPiece)}></button>
            </div>);
            case 7: return (
              <Afronden posts={this.state.posts}/>);
            default: return "oops geen stap";
          }
        })()}

 
      </div>

    );
  }
}

export default ImageApp;
