import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import DataPage from "./data/DataPage";
import Docs from "../docs/Docs";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/data" component={DataPage} />
        <Route path="/documents" component={Docs} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
