import React from 'react'
// import ReactDOM from 'react-dom'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import Counter from '../../src/components/Counter'

expect.extend(expectJSX)

describe('components', () => {
  
  describe('Counter component', () => {

    // Render Current Value
    // ********************************
      
    it('should render the current counter value', () => {

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Counter value={12} />)
      let actualOutput = renderer.getRenderOutput()

      let expectedOutput = <p>Counter Value : 12</p>

      expect(actualOutput).toIncludeJSX(expectedOutput)  

    })

    // Render Increment Button
    // ********************************

    it('should render the increment button', () => {

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Counter />)
      let actualOutput = renderer.getRenderOutput()

      let expectedOutput = <button onClick={undefined} >Increment</button>

      expect(actualOutput).toIncludeJSX(expectedOutput)

    })

    // Click Increment Button
    // ********************************

    it('clicks the increment button', () => {  

      // code to test the click event
      let hasClicked = false
      let click = () => hasClicked = true

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Counter increment={click} />)
      let actualOutput = renderer.getRenderOutput()

      // onClick event for the button
      actualOutput.props.children[1].props.onClick()

      expect(hasClicked).toBe(true)

    })

    // Render Reset Button
    // ********************************

    it('should render the reset button', () => {

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Counter />)
      let actualOutput = renderer.getRenderOutput()

      let expectedOutput = <button onClick={undefined} >Reset</button>

      expect(actualOutput).toIncludeJSX(expectedOutput)

    })

    // Click Reset Button
    // ********************************

    it('clicks the reset button', () => {  

      // code to test the click event
      let hasClicked = false
      let click = () => hasClicked = true

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Counter reset={click} />)
      let actualOutput = renderer.getRenderOutput()

      // onClick event for the button
      actualOutput.props.children[2].props.onClick()

      expect(hasClicked).toBe(true)

    })

  })

})
