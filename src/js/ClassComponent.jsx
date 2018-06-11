import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent.jsx';


class ClassComponent extends Component {

<<<<<<< HEAD
=======
  constructor(props){
    super(props);
    this.testobject  = {"a":"1"}
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }

  handleError(err){
    console.error(err)
  }
>>>>>>> htmlskelet home

  render(){
    return (


      <HeaderComponent />
  
    )
  }

}

export default ClassComponent;
