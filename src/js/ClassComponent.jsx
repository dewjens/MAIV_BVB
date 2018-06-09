import React, {Component} from 'react';

class ClassComponent extends Component {


  constructor(props){
    super(props);
    this.testobject  = {"a":"1"}
  }

  testIt = x => {
    const test = {...this.testobject}
    console.log(test);
  }

  render(){
    this.testIt();
    return this.props.items.map(item => <p className="race" key={item}>{item}</p>)
  }

}

export default ClassComponent;