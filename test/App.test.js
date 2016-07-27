import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import connectedApp, { App } from '../src/App.js'
import Counter from '../src/components/Counter'

describe('Main App Body', () => {

  // Display Application Title
  // ********************************

  it('should display the title', () => {

    // code to create render object to test
    let renderer = createRenderer()
    renderer.render(<App />)
    let actualOutput = renderer.getRenderOutput()

    let expectedResult = <h2>React and Redux - Test First Example</h2>

    expect(actualOutput).toIncludeJSX(expectedResult)

  })

  // Render Counter Component
  // ********************************

  it('should render the Counter component', () => {

    // code to create render object to test
    let renderer = createRenderer()
    renderer.render(<App counter={99} />)
    let actualOutput = renderer.getRenderOutput()

    let expectedResult = <Counter value={99} increment={undefined} reset={()=>{}} />

    expect(actualOutput).toIncludeJSX(expectedResult)

  })

})

