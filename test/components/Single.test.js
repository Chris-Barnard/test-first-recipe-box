import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import { shallow } from 'enzyme'
import Single from '../../src/components/Single'

expect.extend(expectJSX)

describe('components', () => {

  let minProps = {
    // image
  }
  
  describe('Single component', () => {

    // Render with min props
    // ********************************

    it('should render without blowing up', () => {

      const wrapper = shallow(<Single />)
      expect(wrapper.find('.singleContainer').length).toBe(1)

    })

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

    // Render a panel to hold current step instructions
    // ********************************

    it('should render a panel with a p element', () => {

      const wrapper = shallow(<Single />)
      expect(wrapper.find('p').length).toBe(1)

    })

  })

})
