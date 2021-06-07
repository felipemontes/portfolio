import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Links from "../pages/Links";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/links" component={Links} />
        </Switch>
      </Layout>
    </Router>
  );
}
