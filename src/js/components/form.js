import React, { Component } from 'react';

// import firestore //
import firebase from 'firebase';
import firestore from 'firebase/firestore'
let Ref;

export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      content: "",
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
      content:this.state.content,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    Ref.add(Post);
  }


  render() {
    return (
      <div className="form-row">
        <input name="name"
          className="form-control col-md-2"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <button type="button" className="confirmBtn" onClick={this.handleSubmit}>
        
        </button>
      </div>
    );
  }
}
