import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../src/actions/actionCreators'
import Counter from '../src/components/Counter';

function mapStateToProps(state) {
  return {
    counter : state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export class App extends Component {
  
  render() {
    const { counter, incrementCounter, setCounter } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React and Redux - Test First Example</h2>
        </div>
        <p className="App-intro">
          <Counter value={counter} increment={ incrementCounter } reset={ () => setCounter(0) } />
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
