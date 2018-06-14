import React, {Component} from 'react';
import QrReader from 'react-qr-reader'
import {browserHistory} from 'react-router';
//import {Link} from 'react-router-dom';
import Footer from './FooterComponent.jsx';


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
      this.props.history.push('/billboard');
    }
  }
  handleError(err){
    console.error(err)
  }


  render(){
    return(
      <div className="kunstwerkenContainer">
        <section className="page-header">
          <h2>Scan de QR code op de billboard!</h2>
        </section>

          <div className="desktop-container">
            <img src="./assets/img/bezoekPhone.png" alt="go to mobile"/>
            <div className="text-bg">
              <div>
                <p className="qr-text">bezoek deze pagina voor de volledige beleving</p>
                <p className="qr-text">pak je telefoon en scan deze qr-code</p>
              </div>
              <img src="./assets/img/qr-code.png" alt="qr code" width="143px" height="143px" />

            </div>
          </div>

      <div className="qr-reader">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}

          style={{ width: '100%' }}
          />
        </div>

        <Footer />

      </div>
    )
  }
}


export default QRScannerComponent;
