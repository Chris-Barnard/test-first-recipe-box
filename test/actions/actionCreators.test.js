import expect from 'expect'
import * as actions from '../../src/actions/actionCreators'

describe('actions', () => {
 
  /*// INCREMENT_COUNTER
  // ********************************

  it('should create INCREMENT_COUNTER action', () => {

    const expectedAction = {
      type : 'INCREMENT_COUNTER'
    }

    expect(actions.incrementCounter()).toEqual(expectedAction)

  })

  // RESET_COUNTER
  // ********************************

  it('should create the SET_COUNTER action', () => {

  	const expectedAction = {
  		type : 'SET_COUNTER', 
  		value : 13
  	}

  	expect(actions.setCounter(13)).toEqual(expectedAction)

  })*/

  // LOAD_RECIPES
  // ********************************

  it('should create the LOAD_RECIPES action', () => {

    const dataToLoad = { test : 1, data : 0 }

    const expectedAction = {
      type : 'LOAD_RECIPES',
      data : dataToLoad
    }

    expect(actions.loadRecipes(dataToLoad)).toEqual(expectedAction)

  })


  // TOGGLE_HIGHLIGHT
  // ********************************

  it('should create the TOGGLE_HIGHLIGHT action',() => {

    const id = 2

    const expectedAction = {
      type : 'TOGGLE_HIGHLIGHT',
      id : 2
    }

    expect(actions.toggleHighlight(id)).toEqual(expectedAction)

  })

  // SELECT_RECIPE
  // ********************************

  it('should create the SELECT_RECIPE action',() => {

    const id = 25
    const img = 'something.jpg'

    const expectedAction = {
      type : 'SELECT_RECIPE',
      id,
      img,
    }

    expect(actions.selectRecipe(id, img)).toEqual(expectedAction)

  })

  // NEXT_ACTION
  // ********************************

})