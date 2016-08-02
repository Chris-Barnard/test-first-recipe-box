import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import FlipMove from 'react-flip-move'

import expect from 'expect'
import { shallow } from 'enzyme'
import StepList from '../../src/components/StepList'

describe('components', () => {

  let minProps = {
    recipe : {
      steps : [],
    }
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

      const steps = [{ caption : 'Test Entry'},{ caption : 'Test 2'},{ caption : 'Test 3'}]
      const recipe = {
        steps,
      }
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} />)
      expect(wrapper.find('li').length).toBe(recipe.steps.length)

    })

    // Handle clicking on the close button
    // *********************************

    it('should handle a click on a StepCard component close button', () => {

      const steps = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2 },{ caption : 'Test 3', id : 3 }]
      const recipe = {
        steps,
      }
      const click = expect.createSpy()
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} complete={click} />)
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

      const steps = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2 },{ caption : 'Test 3', id : 3 }]
      const recipe = {
        steps,
      }
      const click = expect.createSpy()
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} toggleCompleteButton={click} />)
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

      const steps = [{ caption : 'Test Entry', id : 1 },{ caption : 'Test 2', id : 2, showCloseButton : true },{ caption : 'Test 3', id : 3 }]
      const recipe = {
        steps,
      }
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} />)

      let stepCards = wrapper.find('.stepCardCloseButton')
      expect(stepCards.at(1).props().style.visibility).toBe('visible')

    })

    it('should accept time estimate from the list of steps object', () => {

      const steps = [{
        id : 1,
        caption : 'woohoo',
        timeEstimate : 24,
      }]
      const recipe = {
        steps,
      }
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} />)
      expect(wrapper.find('.stepList').length).toBe(1)
      expect(wrapper.find('.timeEstimate').length).toBe(1)
      expect(wrapper.find('.timeEstimate').props().children[0]).toBe(24)

    })

    it('should accept an image in the stepdata to provide instead of the default', () => {

      const steps = [{
        id : 1,
        caption : 'wooohoo',
        image : './burger.jpg',
      }]
      const recipe = {
        steps,
      }
      const wrapper = shallow(<StepList {...minProps} recipe={recipe} />)

      const image = wrapper.find('img')
      expect(wrapper.find('.stepList').length).toBe(1)
      expect(wrapper.find('img').props().src).toEqual('./burger.jpg')

    })

  })

})
