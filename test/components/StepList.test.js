import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import FlipMove from 'react-flip-move'

import expect from 'expect'
import { shallow } from 'enzyme'
import StepList from '../../src/components/StepList'

describe('components', () => {

  let minProps = {
    list : [],
    // complete : expect.createSpy()
  }
  
  describe('StepList component', () => {

    // Render with min props
    // ********************************

    it('should render without blowing up', () => {

      const wrapper = shallow(<StepList {...minProps} />)
      expect(wrapper.find('.stepList').length).toBe(1)

    })

    // Render a UL element
    // ********************************

    it('should render a ul component', () => {

      const wrapper = shallow(<StepList {...minProps} />)
      expect(wrapper.find(FlipMove).length).toBe(1)

    })

    // Render correct number of LI components
    // ********************************

    it('should render the correct number of LI components', () => {

      const list = [{ caption : 'Test Entry'},{ caption : 'Test 2'},{ caption : 'Test 3'}]

      const wrapper = shallow(<StepList {...minProps} list={list} />)
      expect(wrapper.find('li').length).toBe(list.length)

    })

    // Handle clicking on the close button
    // *********************************

    it('should handle a click on a StepCard component close button', () => {

      const list = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2 },{ caption : 'Test 3', id : 3 }]
      const click = expect.createSpy()
      const wrapper = shallow(<StepList {...minProps} list={list} complete={click} />)
      let cards = wrapper.find('.stepCardCloseButton')

      expect(click.calls.length).toBe(0)

      cards.at(0).simulate('click', { preventDefault : () => {} })
      expect(click.calls.length).toBe(1)
      expect(click.calls[0].arguments[0]).toBe(1)

      cards.at(2).simulate('click', { preventDefault : () => {} })
      expect(click.calls.length).toBe(2)
      expect(click.calls[1].arguments[0]).toBe(3)

    })

    // handle call to function provided for onMouseOver and onMouseOut
    // *********************************

    it('should handle call to function provided for onMouseOver and onMouseOut', () => {

      const list = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2 },{ caption : 'Test 3', id : 3 }]
      const click = expect.createSpy()
      const wrapper = shallow(<StepList {...minProps} list={list} toggleCompleteButton={click} />)
      let cards = wrapper.find('.stepCard')

      expect(click.calls.length).toBe(0)

      cards.at(0).simulate('mouseOver')
      expect(click.calls.length).toBe(1)
      expect(click.calls[0].arguments[0]).toBe(1)

      cards.at(2).simulate('mouseOut')
      expect(click.calls.length).toBe(2)
      expect(click.calls[1].arguments[0]).toBe(3)

    })

    it('should display the button when showCloseButton is true', () => {

      const list = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2, showCloseButton : true },{ caption : 'Test 3', id : 3 }]
      const wrapper = shallow(<StepList {...minProps} list={list} />)

      let stepCards = wrapper.find('.stepCardCloseButton')
      expect(stepCards.at(1).props().style.visibility).toBe('visible')

    })

  })

})
