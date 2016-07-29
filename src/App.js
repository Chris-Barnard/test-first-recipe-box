import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../src/actions/actionCreators'
import Counter from '../src/components/Counter';
import Single from '../src/components/Single'
import RecipeList from '../src/components/RecipeList'

// for now loading this statically
import image from './assets/photo.jpg'
import getRecipes from './data/api'

function mapStateToProps(state) {
  return {
    counter : state.counter,
    recipes : state.recipes,
    viewer : state.viewer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export class App extends Component {

  componentDidMount() {
    const { loadRecipes, selectRecipe } = this.props
    
    loadRecipes(getRecipes())
    selectRecipe(100, image)

  }
  
  render() {
    const { viewer, counter, incrementCounter, setCounter, toggleHighlight, selectRecipe, recipes } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React and Redux - Test First Example</h2>
        </div>
        <div className="App-intro">
          <Single image={viewer.mainImage} />
          <RecipeList list={recipes} toggleHighlight={toggleHighlight} select={selectRecipe} />
          {/*<Counter value={counter} increment={ incrementCounter } reset={ () => setCounter(0) } />*/}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
