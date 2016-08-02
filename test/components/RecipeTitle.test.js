import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import RecipeTitle from '../../src/components/RecipeTitle'

describe('components', () => {

  let minProps = {
    activeRecipe : {
      name : 'Chicken Flied Ice'
    }
  }

  describe('RecipeTitle component', () => {

    // Render without exploding
    // ******************************

    it('should render without exploding', () => {

      const wrapper = shallow(<RecipeTitle {...minProps} />)
      expect(wrapper.find('.recipeTitle').length).toEqual(1)

    })

    // Render the recipe title
    // ******************************

    it('should render the recipe title', () => {

      
      const wrapper = shallow(<RecipeTitle {...minProps} />)
      expect(wrapper.find('h2').length).toBe(1)
      expect(wrapper.find('h2').text()).toEqual('Chicken Flied Ice')

    })

  })

})