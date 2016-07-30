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
          steps : [],
        }, recipeList : [{ name : 'Chicken Thighs', images : [] }] }

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

  });

})