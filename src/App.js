import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import "./components/nav.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Champion from "./pages/Chamipon";
import Line from "./pages/Line";
import Complex from "./pages/Complex";
import Item from "./components/itemcomponents/Item";
import Leader from "./pages/Leader";
import Nav from "./components/Nav";
import Search from "./components/searchcomponents/Search";
import Openteam from "./components/searchcomponents/opencomponenets/Openteam";
import Complex2 from "./pages/Complex2";

function App() {
  return (
    <>
      <div className="relative">
        <Router>
          <Nav />

          <Link to="/">
            <Header />
          </Link>

          <Switch>
            <Route path="/" component={Home} exact={true} />
            {/* <Route path="/user" component={Search} /> */}
            <Route path="/champion" component={Champion} />
            <Route path="/line" component={Line} />
            <Route path="/complex" component={Complex} />
            <Route path="/item" component={Item} />
            <Route path="/leader" component={Leader} />
            <Route path="/Complex2" component={Complex2} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
