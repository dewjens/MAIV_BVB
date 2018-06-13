import React, { Component } from 'react';

import firebase from 'firebase';
//import firestore from 'firebase/firestore'
let Ref;

export default class Form extends Component {

  constructor(props) {
    super();
    this.state = {
      name: "",
      x: 0,
      y: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    Ref = firebase.firestore().collection('post');
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const Post = ({
      name: this.state.name,
      x: this.state.x,
      y: this.state.y,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    Ref.add(Post);
  }

  render() {
    console.log(this.props.chosenPiece);
    const chosenPiece = this.props.chosenPiece;

    return (
      <div className="form-row">
        <input name="name"
          className="form-control col-md-2"
          value={this.state.name}
          onChange={this.handleChange}
          defaultValue={chosenPiece.name}
        />
        <input name="x"
          className="form-control col-md-2"
          value={this.state.x}
          onChange={this.handleChange}
          defaultValue="200"
        />
        <input name="y"
          className="form-control col-md-2"
          value={this.state.y}
          onChange={this.handleChange}
          defaultValue="100"
        />
        <button type="button" className="confirmBtn" onClick={this.handleSubmit}>

        </button>
      </div>
    );
  }
}
