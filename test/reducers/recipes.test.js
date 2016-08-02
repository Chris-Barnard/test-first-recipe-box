import expect from 'expect';
import reducer from '../../src/reducers/recipes';
describe('reducers', () => {

  describe('recipe reducer', () => {

    // INITIALIZE
    // ********************************

    it('should provide an initial state', () => {

      const initialState = undefined

      const action = {
        type : '@@INIT'
      }

      const expectedState = {
        activeRecipe : {
          steps : [],
        },
        recipeList : [],
      }

      expect(reducer(initialState, action)).toEqual(expectedState);
      expect(initialState).toEqual(initialState)
      expect(action).toEqual(action)
    })

    // LOAD_RECIPES
    // ********************************

    it('should handle action LOAD_RECIPES', () => {

      let initialState = {
        activeRecipe : {},
        recipeList : [],
      }
      const data = [{ name : 'Chicken Thighs', images : [] }]

      let action = {
        type : 'LOAD_RECIPES',
        data
      }

      let expectedState = { activeRecipe : {
          name : 'Chicken Thighs',
          images : [],
          steps : [],
        }, recipeList : [{ name : 'Chicken Thighs', images : [], isSelected : true }] }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);

    });

    // TOGGLE_HIGHLIGHT
    // ********************************

    it('should handle action TOGGLE_HIGHLIGHT', () => {

      const initialState = { activeRecipe : {}, recipeList : [{
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : false,
        isSelected : false,
      },{
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : false,
      }] }
      
      const action = {
        type : 'TOGGLE_HIGHLIGHT',
        id : 100
      }

      const expectedState = { activeRecipe : {
          steps : [],
        }, recipeList : [{
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : true,
        isSelected : false,
      },{
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : false,
      }] }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

    // SELECT_RECIPE
    // ********************************

    it('should handle action SELECT_RECIPE', () => {

      const initialState = { activeRecipe : { something : 'that should', get : 'replaced' }, recipeList : [{
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : false,
        isSelected : false,
      },{
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : false,
      }] }

      let action = {
        type : 'SELECT_RECIPE',
        id : 100,
      }

      let expectedState = { activeRecipe : {
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : false,
        isSelected : true,
        steps : [],
      }, recipeList : [{
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : false,
        isSelected : true,
      },{
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : false,
      }] }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);

      action = {
        type : 'SELECT_RECIPE',
        id : 101,
      }

      expectedState = { activeRecipe : {
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : true,
        steps : []
      }, recipeList : [{
        name : 'Chicken Thighs',
        id : 100,
        isHighlighted : false,
        isSelected : false,
      },{
        name : 'Hamburger Patty Salad',
        id : 101,
        isHighlighted : false,
        isSelected : true,
      }] }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

    // TOGGLE_HIGHLIGHT
    // ********************************    

    it("it shouldn't lose the activeRecipe.steps when another action fires", () => {

      const initialState = {
        activeRecipe : {
          steps : [
            'test 1',
            'test 2'
          ]
        },
        recipeList : [{
          name : 'Chicken Thighs',
          id : 100,
          isHighlighted : false,
          isSelected : false,
        },{
          name : 'Hamburger Patty Salad',
          id : 101,
          isHighlighted : false,
          isSelected : true,
        }]
      }

      const action = {
        type : 'TOGGLE_HIGHLIGHT',
        id : 100
      }

      const expectedState = {
        activeRecipe : {
          steps : [
            'test 1',
            'test 2'
          ]
        },
        recipeList : [{
          name : 'Chicken Thighs',
          id : 100,
          isHighlighted : true,
          isSelected : false,
        },{
          name : 'Hamburger Patty Salad',
          id : 101,
          isHighlighted : false,
          isSelected : true,
        }]
      }

      expect(reducer(initialState, action)).toEqual(expectedState)

    })

    // Handle action TOGGLE_STEP_CLOSE_BUTTON
    // *********************************

    it('should handle action TOGGLE_STEP_CLOSE_BUTTON', () => {

      let initialState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1 },{ caption : 'test 2', id : 2 }]
        }
      }

      let action = {
        type : 'TOGGLE_STEP_CLOSE_BUTTON',
        stepNum : 1,
        value : true
      }

      let expectedState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1, showCloseButton : true },{ caption : 'test 2', id : 2, showCloseButton : false }]
        },
        recipeList : []
      }

      expect(reducer(initialState, action)).toEqual(expectedState)

      initialState = expectedState

      action = {
        type : 'TOGGLE_STEP_CLOSE_BUTTON',
        stepNum : 1,
        value : false,
      }
      
      expectedState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1, showCloseButton : false },{ caption : 'test 2', id : 2, showCloseButton : false }]
        },
        recipeList : []
      }

      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    // Handle action COMPLETE_STEP
    // *********************************

    it('should handle action COMPLETE_STEP', () => {

      let initialState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1 },{ caption : 'test 2', id : 2 }]
        }
      }

      let action = {
        type : 'COMPLETE_STEP',
        stepNum : 1,
      }

      let expectedState = {
        activeRecipe : {
          steps : [{ caption : 'test 2', id : 2 }]
        },
        recipeList : []
      }

      expect(reducer(initialState, action)).toEqual(expectedState)

      initialState = expectedState
      
      action = {
        type : 'COMPLETE_STEP',
        stepNum : 2,
      }

      expectedState = {
        activeRecipe : {
          steps : []
        },
        recipeList : []
      }

      expect(reducer(initialState, action)).toEqual(expectedState)

      initialState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1 },{ caption : 'test 2', id : 2 }]
        }
      }

      action = {
        type : 'COMPLETE_STEP',
        stepNum : 2,
      }

      expectedState = {
        activeRecipe : {
          steps : [{ caption : 'test 1', id : 1 }]
        },
        recipeList : [],
      }

      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    // Handle action BEGIN_STEP
    // ********************************

    it('should handle action BEGIN_STEP', () => {

      let initialState = {
        activeRecipe : {
          steps : [],
        }
      }

      let action = {
        type : 'BEGIN_STEP',
        image : 'test',
        caption : 'test it out',
      }

      let expectedState = {
        activeRecipe : {
          steps : [],
          showSteps : true,
        },
        recipeList : [],
      }

      expect(reducer(initialState, action)).toEqual(expectedState)

    })

  });

})