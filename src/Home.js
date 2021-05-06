  
import { Component } from 'react';
import React from 'react';
import './App.scss';
import './Form.scss';
import Form from'./Form.js';
import Results from './Results';
import History from './History'
import './Results.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray : [],
      Count : 0,
    };
  }

  handleForm = (results, Count) => {

    this.setState({ resultsArray: results, Count: Count});
  };
  render() {
    return (
      <>
        <Form  handler={this.handleForm} />
        <section id="body">
        <History />
        <Results  count={this.state.Count} headers={this.state.resultsArray[0]} results={this.state.resultsArray[1]}/>
        </section>
      </>
    );
  }
}
