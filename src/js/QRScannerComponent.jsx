import React, {Component} from 'react';
import QrReader from 'react-qr-reader'


class QRScannerComponent extends Component {
  constructor(props){
    super(props)
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
  render(){
    return(
      <div>
        <section className="pagHeader">
          <h2>Bezoek deze pagina met je smartphone voor de volledige beleving!ompleet zijn door jullie</h2>
        </section>

        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}


export default QRScannerComponent;
