import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import RecipeTitle from '../../src/components/RecipeTitle'

describe('components', () => {

  let minProps = {
    activeRecipe : {
      name : 'Chicken Flied Ice',
      prepTime : '10 mins',
      cookTime : '0 mins',
      ingredients : [{
        name : 'chicken thighs',
        amount : '1 package',
      },{
        name : 'garlic',
        optional : true,
        amount : '1 clove, minced'
      }]
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

    // Render the ingredient list
    // *******************************

    it('should render the ingredient list', () => {

      const wrapper = shallow(<RecipeTitle {...minProps} />)
      expect(wrapper.find('li').length).toBe(minProps.activeRecipe.ingredients.length)

    })

    // Render the time estimates
    // **********************************

    it('should render the time estimates', () => {

      const wrapper = shallow(<RecipeTitle {...minProps} />)
      const timeEstimates = wrapper.find('h6')
      expect(timeEstimates.length).toBe(2)
      expect(timeEstimates.at(0).text()).toEqual('Prep Time : 10 mins')
      expect(timeEstimates.at(1).text()).toEqual('Cook Time : 0 mins')

    })

  })

})