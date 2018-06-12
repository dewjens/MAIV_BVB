import React from 'react';
import {Route, Link, Switch, HashRouter } from 'react-router-dom'
import Locatie from './LocatieComponent.jsx';
import Kunstwerken from './KunstwerkenComponent.jsx';
import QRScanner from './QRScannerComponent.jsx';
import Info from './InfoComponent.jsx';
import Home from './HomeComponent.jsx'


const HeaderComponent = () => {
  return (
    <HashRouter>
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
          <Route path="/" exact render={() =>  <Home />} />

          <Route path="/locaties" component={Locatie} />
          <Route path="/kunstwerken" component={Kunstwerken} />
          <Route path="/qrscanner" component={QRScanner} />
          <Route path="/info" component={Info} />
        </Switch>
      </header>
    </HashRouter>

  );
}

export default HeaderComponent;
