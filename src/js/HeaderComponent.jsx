import React from 'react';
import {Route, Link, Switch, HashRouter } from 'react-router-dom'
import Locatie from './LocatieComponent.jsx';
import Kunstwerken from './KunstwerkenComponent.jsx';
import QRScanner from './QRScannerComponent.jsx';
import Info from './InfoComponent.jsx';
import Home from './HomeComponent.jsx'
import Billboard from './Billboard.jsx'


const HeaderComponent = () => {
  return (
    <HashRouter>
      <header>
        <nav className="nav-mobile">
          <ul className="nav-list-mobile">
            <li className="nav-li"><Link className="nav-link-mobile nav-link-mobile-1 nav-link" to="/">Home</Link></li>
            <li className="nav-li"><Link className="nav-link-mobile nav-link-mobile-2 nav-link" to="/locaties">Locaties</Link></li>
            <li className="nav-li"><Link className="nav-link-mobile nav-link-mobile-3 nav-link" to="/qrscanner">beginnen</Link></li>
            <li className="nav-li"><Link className="nav-link-mobile nav-link-mobile-4 nav-link" to="/kunstwerken">Werken</Link></li>
            <li className="nav-li"><Link className="nav-link-mobile nav-link-mobile-5 nav-link" to="/info">Info</Link></li>
          </ul>
        </nav>
      <header className="header-container">
        <Link to="/">
          <div className="logo-container">
            <img className="header-img" src="./assets/img/logo-header.svg" alt="header-img"/>
            <h1 className="header-title">billboards by boijmans</h1>
            <div className="black-stroke"></div>
            <div className="black-stroke"></div>
          </div>
        </Link>
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
          <Route path="/" exact render={Home} />
          <Route path="/locaties" component={Locatie} />
          <Route path="/kunstwerken" component={Kunstwerken} />
          <Route path="/qrscanner" component={QRScanner} />
          <Route path="/info" component={Info} />

          <Route
            path="/billboard" component={Billboard}
          />
        </Switch>
      </header>
    </HashRouter>

  );
}

export default HeaderComponent;
