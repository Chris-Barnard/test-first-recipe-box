import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import Single from '../../src/components/Single'

expect.extend(expectJSX)

describe('components', () => {
  
  describe('Single component', () => {

    // Render Current Placeholder Image
    // ********************************

    it('should display an image from props', () => {

      // code to stub image
      let image = {}

      // code to create render object to test
      let renderer = createRenderer()
      renderer.render(<Single image={image} />)
      let actualOutput = renderer.getRenderOutput()

      let expectedOutput = <img src={image} className="single-image" />

      expect(actualOutput).toIncludeJSX(expectedOutput)

    })

  })

})
