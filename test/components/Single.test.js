import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
import { shallow } from 'enzyme'
import Single from '../../src/components/Single'

expect.extend(expectJSX)

describe('components', () => {

  let minProps = {
    viewer : {
      mainImage : 'test',
      mainCaption : 'test it',
    }
  }
  
  describe('Single component', () => {

    // Render with min props
    // ********************************

    it('should render without blowing up', () => {

      const wrapper = shallow(<Single {...minProps} />)
      expect(wrapper.find('.singleContainer').length).toBe(1)

    })

    // Render Current Placeholder Image
    // ********************************

    it('should display an image from props', () => {

      const mainImage = { xyz : '123' }
      const viewer = {
        mainImage,
      }
      const wrapper = shallow(<Single viewer={viewer} />)

      expect(wrapper.find('img').length).toBe(1)

    })

    // Render a panel to hold current step instructions
    // ********************************

    it('should render the caption panel', () => {

      const mainCaption = 'Here we go.  Everyone is sure to love these!'
      const viewer = {
        mainCaption,
      }

      const wrapper = shallow(<Single viewer={viewer} />)
      expect(wrapper.find('.singleCaption').length).toBe(1)
      expect(wrapper.find('p').text()).toBe(mainCaption)

    })

  })

})
