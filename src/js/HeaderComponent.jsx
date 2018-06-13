import React from 'react';
import {Route, Link, Switch, HashRouter } from 'react-router-dom'
import Locatie from './LocatieComponent.jsx';
import Kunstwerken from './KunstwerkenComponent.jsx';
import QRScanner from './QRScannerComponent.jsx';
import Info from './InfoComponent.jsx';
import Home from './HomeComponent.jsx';
import Poster from './Poster.jsx'
import BillboardComponent from './billboard/BillboardComponent.jsx';


const HeaderComponent = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact render={() =>  <Home />} />

          <Route path="/locaties" component={Locatie} />
          <Route path="/kunstwerken" component={Kunstwerken} />
          <Route path="/qrscanner" component={QRScanner} />
          <Route path="/info" component={Info} />
          <Route
            path="/billboard" component={BillboardComponent}
          />
          <Route path="/poster" component={Poster} />
        </Switch>
    </HashRouter>

  );
}

export default HeaderComponent;
