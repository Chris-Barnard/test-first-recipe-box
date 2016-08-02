import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import { shallow } from 'enzyme'
import expectJSX from 'expect-jsx'
import connectedApp, { App } from '../src/App.js'
import Single from '../src/components/Single'
import RecipeList from '../src/components/RecipeList'
import StepList from '../src/components/StepList'
import RecipeTitle from '../src/components/RecipeTitle'

describe('Main App Body', () => {

  let minProps = {
    viewer : {},
    recipes : [],
    selectRecipe : () => {},
    activeRecipe : {
      steps : [],
    }
  }

  it('should render w/out exploding', () => {

    let wrapper = shallow(<App {...minProps} />)
    expect(wrapper.find('.App').length).toBe(1)

  })

  // Display Application Title
  // ********************************

  it('should display the title', () => {

    // code to create render object to test
    let renderer = createRenderer()
    renderer.render(<App {...minProps} />)
    let actualOutput = renderer.getRenderOutput()

    let expectedResult = <h2>React and Redux - Test First Example</h2>

    expect(actualOutput).toIncludeJSX(expectedResult)

  })

  // Render Single Component
  // ********************************

  it('should render the Single component', () => {

    const wrapper = shallow(<App {...minProps} />)
    expect(wrapper.find(Single).length).toBe(1)

  })

  // Render the RecipeList Component
  // ********************************

  it('should render the RecipeList component', () => {

    const wrapper = shallow(<App {...minProps} />)
    expect(wrapper.find(RecipeList).length).toBe(1)

  })  

  // Render the StepList component
  // *********************************

  it('should render the StepList component', () => {
    const viewer = {
      mode : 'steps'
    }
    const wrapper = shallow(<App {...minProps} viewer={viewer} />)
    expect(wrapper.find(StepList).length).toBe(1)

  })

  // Render the RecipeTitle component
  // ************************************

  it('should render the RecipeTitle component', () => {
    const viewer = {
      mode : 'title'
    }

    const wrapper = shallow(<App {...minProps} viewer={viewer} />)
    expect(wrapper.find(RecipeTitle).length).toBe(1)
  })

})