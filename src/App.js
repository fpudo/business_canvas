import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="NavBar"></nav>
        <section className="Canvas">
          <section className="How">
            <div className="KeyPartners BoxStyle">KeyPartners</div>
            <div className="KeyActivities BoxStyle">KeyActivities</div>
            <div className="KeyResources BoxStyle">KeyResources</div>
          </section>
          <section className="What">
            <div className="ValueProposition BoxStyle">Value Proposition</div>
          </section>
          <section className="ToWho">
            <div className="CustomerRelationship BoxStyle">CustomerRelationship</div>
            <div className="CustomerSegments BoxStyle">CustomerSegments</div>
            <div className="Channels BoxStyle">Channels</div>
          </section>
          <section className="HowMuch">
            <div className="CostStructure BoxStyle">CostStructure</div>
            <div className="RevenueStreams BoxStyle">RevenueStreams</div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
