import React from 'react'
import ReactDOM from 'react-dom'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import Counter from '../../src/components/Counter'

expect.extend(expectJSX)

describe('Counter Component', () => {

  let hasClicked = false
  let click = () => hasClicked = true
  let renderer = createRenderer()
  renderer.render(<Counter value={12} increment={click} />)
  let actualOutput = renderer.getRenderOutput()
    
  it('should render the current counter value', () => {

    let expectedOutput = <p>Counter Value : 12</p>

    expect(actualOutput).toIncludeJSX(expectedOutput)  

  })

  it('should render the increment button', () => {

    let expectedOutput = <button onClick={(x)=>x} >Increment</button>

    expect(actualOutput).toIncludeJSX(expectedOutput)

  })

  it('clicks the increment button', () => {  

    // onClick event for the button
    actualOutput.props.children[1].props.onClick()

    expect(hasClicked).toBe(true)

  })

})