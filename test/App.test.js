import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import { shallow } from 'enzyme'
import expectJSX from 'expect-jsx'
import connectedApp, { App } from '../src/App.js'
import Single from '../src/components/Single'
import RecipeList from '../src/components/RecipeList'

describe('Main App Body', () => {

  let minProps = {
    viewer : {},
    recipes : [],
    selectRecipe : () => {},
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

    // code to create render object to test
    let renderer = createRenderer()
    renderer.render(<App {...minProps} viewer={{mainImage : {}}} />)
    let actualOutput = renderer.getRenderOutput()

    let expectedResult = <Single image={{}} />

    expect(actualOutput).toIncludeJSX(expectedResult)

  })

  // Render the RecipeList Component
  // ********************************

  it('should render the RecipeList component', () => {

    const wrapper = shallow(<App {...minProps} />)
    expect(wrapper.find(RecipeList).length).toBe(1)
    

    /*// code to create render object to test
    let renderer = createRenderer()
    renderer.render(<App recipes={{}} />)
    let actualOutput = renderer.getRenderOutput()

    let expectedResult = <RecipeList list={{}} />

    expect(actualOutput).toIncludeJSX(expectedResult)*/

  })  

  // 

})