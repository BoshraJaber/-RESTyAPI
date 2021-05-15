import { Component } from "react";
import React from "react";
import "./App.scss";
import "./Form.scss";
import Form from "./Form.js";
import Results from "./Results";
import HistorySection from "./History";
import "./Results.scss";
import "./Home.scss"

export default class Home extends Component {
  constructor(props) {
    // console.log("props in home page", props?.location?.query);
    super(props);
    this.state = {
      resultsArray: [],
      Count: 0,
      query: this.props?.location?.query,
    };
  }
  handleForm = (results, Count) => {
    this.setState({ resultsArray: results, Count: Count });
  };
  render() {
    return (
      <>
        <Form handler={this.handleForm} reRunBtn={this.state} />
        <section id="body">
          <HistorySection />
          <Results
            count={this.state.Count}
            headers={this.state.resultsArray[0]}
            results={this.state.resultsArray[1]}
          />
        </section>
      </>
    );
  }
}
