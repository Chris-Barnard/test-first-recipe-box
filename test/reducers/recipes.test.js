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

      const expectedState = []

      expect(reducer(initialState, action)).toEqual(expectedState);

    })

    // LOAD_RECIPES
    // ********************************

    it('should handle action LOAD_RECIPES', () => {

      const initialState = []
      const data = [{ name : 'Chicken Thighs', images : [] }]

      const action = {
        type : 'LOAD_RECIPES',
        data
      }

      const expectedState = [{ name : 'Chicken Thighs', images : [] }]

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

    // TOGGLE_HIGHLIGHT
    // ********************************

    it('should handle action TOGGLE_HIGHLIGHT', () => {

      let id = 100
      let startingValue = false
      const initialState = [{
    name : 'Chicken Thighs',
    id : 100,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Use scissors to cut the excess fat off the chicken',
      image : null
    },{
      order : 2,
      caption : 'Marinate chicken thighs in salad dressing',
      image : null
    },{
      order : 3,
      caption : 'Grill chicken on the grill for about 4-7 minutes each side'
    }]
  },{
    name : 'Hamburger Patty Salad',
    id : 101,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
      image : null
    },{
      order : 2,
      caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
      image : null
    },{
      order : 3,
      caption : 'Chop up tomatos, and mix with spinach into a bowl',
      image : null
    }]
  }]
      const action = {
        type : 'TOGGLE_HIGHLIGHT',
        id
      }

      const expectedState = [{
    name : 'Chicken Thighs',
    id : 100,
    isHighlighted : true,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Use scissors to cut the excess fat off the chicken',
      image : null
    },{
      order : 2,
      caption : 'Marinate chicken thighs in salad dressing',
      image : null
    },{
      order : 3,
      caption : 'Grill chicken on the grill for about 4-7 minutes each side'
    }]
  },{
    name : 'Hamburger Patty Salad',
    id : 101,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
      image : null
    },{
      order : 2,
      caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
      image : null
    },{
      order : 3,
      caption : 'Chop up tomatos, and mix with spinach into a bowl',
      image : null
    }]
  }]

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

    // SELECT_RECIPE
    // ********************************

    it('should handle action SELECT_RECIPE', () => {

      let id = 100
      let startingValue = false
      const initialState = [{
    name : 'Chicken Thighs',
    id : 100,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Use scissors to cut the excess fat off the chicken',
      image : null
    },{
      order : 2,
      caption : 'Marinate chicken thighs in salad dressing',
      image : null
    },{
      order : 3,
      caption : 'Grill chicken on the grill for about 4-7 minutes each side'
    }]
  },{
    name : 'Hamburger Patty Salad',
    id : 101,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
      image : null
    },{
      order : 2,
      caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
      image : null
    },{
      order : 3,
      caption : 'Chop up tomatos, and mix with spinach into a bowl',
      image : null
    }]
  }]
      const action = {
        type : 'SELECT_RECIPE',
        id
      }

      const expectedState = [{
    name : 'Chicken Thighs',
    id : 100,
    isHighlighted : false,
    isSelected : true,
    steps : [{
      order : 1,
      caption : 'Use scissors to cut the excess fat off the chicken',
      image : null
    },{
      order : 2,
      caption : 'Marinate chicken thighs in salad dressing',
      image : null
    },{
      order : 3,
      caption : 'Grill chicken on the grill for about 4-7 minutes each side'
    }]
  },{
    name : 'Hamburger Patty Salad',
    id : 101,
    isHighlighted : false,
    isSelected : false,
    steps : [{
      order : 1,
      caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
      image : null
    },{
      order : 2,
      caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
      image : null
    },{
      order : 3,
      caption : 'Chop up tomatos, and mix with spinach into a bowl',
      image : null
    }]
  }]

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

  });

})