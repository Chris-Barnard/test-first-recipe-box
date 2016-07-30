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

      const image = { xyz : '123' }
      const wrapper = shallow(<Single image={image} />)

      expect(wrapper.find('img').length).toBe(1)

    })

    // Render a panel to hold current step instructions
    // ********************************

    it('should render the caption panel', () => {

      const caption = 'Here we go.  Everyone is sure to love these!'

      const wrapper = shallow(<Single caption={caption} />)
      expect(wrapper.find('.singleCaption').length).toBe(1)
      expect(wrapper.find('p').text()).toBe(caption)

    })

  })

})
