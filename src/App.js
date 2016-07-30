import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../src/actions/actionCreators'
import Single from '../src/components/Single'
import RecipeList from '../src/components/RecipeList'
import StepList from '../src/components/StepList'

// for now loading this statically
import image from './assets/photo.jpg'
import getRecipes from './data/api'

function mapStateToProps(state) {
  return {
    recipeList : state.recipes.recipeList,
    activeRecipe : state.recipes.activeRecipe,
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
    selectRecipe(100, image, 'Gotta start somewhere.  It might as well be beautiful!!')

  }
  
  render() {
    const { viewer, toggleHighlight, selectRecipe, recipeList, activeRecipe } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React and Redux - Test First Example</h2>
        </div>
        <div className="App-intro">
          <Single image={viewer.mainImage} caption={viewer.mainCaption} />
          <StepList list={activeRecipe.steps} />
          <RecipeList list={recipeList} toggleHighlight={toggleHighlight} select={selectRecipe} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);