import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import RecipeList from '../../src/components/RecipeList'
import Counter from '../../src/components/Counter'

describe('components', () => {

  let minProps = {
    list : [],
    select : () => {},
  }
  
  describe('RecipeList component v2 - Using Enzyme', () => {

    // Render List of Recipes
    // ********************************

    it('should display the recipe list', () => {

      const wrapper = shallow(<RecipeList {...minProps} />)

      expect(wrapper.find('.recipeList').length).toBe(1)

    })

    // Adjust the style of highlighted items
    // ********************************

    it('should adjust the style of highlighted items', () => {

      const list = [{ name : 'test', isHighlighted : true }, { name : 'test2', isHighlighted : false }]
      const wrapper = shallow(<RecipeList {...minProps} list={list} />)

      let recipes = wrapper.find('.recipeItem')
      expect(recipes.length).toBe(list.length)
      expect(recipes.at(1).props().style.background).toEqual('rgba(0, 0, 0, 0.5)')
      expect(recipes.at(0).props().style.background).toEqual('rgba(0, 0, 0, 0.7)')
    })

    // Adjust the style of selected items
    // ********************************

    it('should adjust the style of selected items', () => {

      const list = [{ name : 'test', isSelected : true }, { name : 'test2', isSelected : false }]
      const wrapper = shallow(<RecipeList {...minProps} list={list} />)

      let recipes = wrapper.find('.recipeItem')
      expect(recipes.length).toBe(list.length)
      expect(recipes.at(1).props().style.background).toEqual('rgba(0, 0, 0, 0.5)')
      expect(recipes.at(0).props().style.background).toEqual('rgba(0, 0, 0, 0.9)')
    })

    // Call the function provided for onClick
    // ********************************

    it('should call function provided for onClick', () => {

      const list = [{ name : 'test', id : 100 }, { name : 'test2', id : 101 }]
      const click = expect.createSpy()
      const wrapper = shallow(<RecipeList {...minProps} list={list} select={click} />)

      let recipes = wrapper.find('.recipeItem')
      
      expect(click.calls.length).toBe(0)
      
      recipes.at(1).simulate('click')
      expect(click.calls.length).toBe(1)
      expect(click.calls[0].arguments[0]).toBe(101)

      recipes.at(0).simulate('click')
      expect(click.calls.length).toBe(2)
      expect(click.calls[1].arguments[0]).toBe(100)
    })

    // Call the function provided for onMouseOver
    // ********************************

    it('should call function provided for onMouseOver', () => {

      const list = [{ name : 'test', id : 100 }, { name : 'test2', id : 101 }]
      const click = expect.createSpy()
      const wrapper = shallow(<RecipeList {...minProps} list={list} toggleHighlight={click} />)

      let recipes = wrapper.find('.recipeItem')
      
      expect(click.calls.length).toBe(0)
      
      recipes.at(1).simulate('mouseOver')
      expect(click.calls.length).toBe(1)
      expect(click.calls[0].arguments[0]).toBe(101)

      recipes.at(0).simulate('mouseOver')
      expect(click.calls.length).toBe(2)
      expect(click.calls[1].arguments[0]).toBe(100)
    })

    // Call the function provided for onMouseOut
    // ********************************

    it('should call function provided for onMouseOut', () => {

      const list = [{ name : 'test', id : 100 }, { name : 'test2', id : 101 }]
      const click = expect.createSpy()
      const wrapper = shallow(<RecipeList {...minProps} list={list} toggleHighlight={click} />)

      let recipes = wrapper.find('.recipeItem')
      
      expect(click.calls.length).toBe(0)
      
      recipes.at(1).simulate('mouseOut')
      expect(click.calls.length).toBe(1)
      expect(click.calls[0].arguments[0]).toBe(101)

      recipes.at(0).simulate('mouseOut')
      expect(click.calls.length).toBe(2)
      expect(click.calls[1].arguments[0]).toBe(100)
    })    

  })

})