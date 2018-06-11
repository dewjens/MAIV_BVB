import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Locatie from './LocatieComponent.jsx';
import Kunstwerken from './KunstwerkenComponent.jsx';
import QRScanner from './QRScannerComponent.jsx';
import Info from './InfoComponent.jsx';


const HeaderComponent = () => {
  return (
    <Router>
      <div>
      <header className="header-container">
        <div className="logo-container">
          <img className="header-img" src="./assets/img/logo-header.svg" alt="header-img"/>
          <h1 className="header-title">billboards by boijmans</h1>
          <div className="black-stroke"></div>
          <div className="black-stroke"></div>
        </div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li><Link className="nav-link link-1" to="/locaties">Locaties</Link></li>
            <li><Link className="nav-link link-2" to="/kunstwerken">Kunstwerken</Link></li>
            <li><Link className="nav-link link-3" to="/qrscanner">QR Scanner</Link></li>
            <li><Link className="nav-link link-4" to="/info">Info</Link></li>
          </ul>
        </nav>
        </header>

      <Switch>
        <Route path="/" exact/>
        <Route path="/locaties" component={Locatie} />
        <Route path="/kunstwerken" component={Kunstwerken} />
        <Route path="/qrscanner" component={QRScanner} />
        <Route path="/info" component={Info} />
      </Switch>
      </div>

    </Router>

  );
}

export default HeaderComponent;
