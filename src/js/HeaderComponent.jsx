import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Locatie from './LocatieComponent.jsx';
import Kunstwerken from './KunstwerkenComponent.jsx';
import QRScanner from './QRScannerComponent.jsx';
import Info from './InfoComponent.jsx';


const HeaderComponent = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/locaties">Locaties</Link></li>
            <li><Link to="/kunstwerken">Kunstwerken</Link></li>
            <li><Link to="/qrscanner">QR Scanner</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
        </nav>

      <Switch>
        <Route path="/" exact/>
        <Route path="/locaties" component={Locatie} />
        <Route path="/kunstwerken" component={Kunstwerken} />
        <Route path="/qrscanner" component={QRScanner} />
        <Route path="/info" component={Info} />
      </Switch>
      </header>
    </Router>

  );
}

export default HeaderComponent;
