import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FormRapidTest from "./components/FormRapidTest";
import CasesByCountry from "./components/CasesByCountry";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cases-country" component={CasesByCountry} />
        <Route path="/form-rapidtest" component={FormRapidTest} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
