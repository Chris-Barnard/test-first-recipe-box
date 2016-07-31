import expect from 'expect'
import * as actions from '../../src/actions/actionCreators'

describe('actions', () => {
 
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
    const caption = 'caption'

    const expectedAction = {
      type : 'SELECT_RECIPE',
      id,
      img,
      caption
    }

    expect(actions.selectRecipe(
      id,
      img,
      caption
    )).toEqual(expectedAction)

  })

  // TOGGLE_STEP_CLOSE_BUTTON
  // ********************************

  it('should create the TOGGLE_STEP_CLOSE_BUTTON action', () => {

    const stepNum = 2
    const value = true
    const expectedAction = {
      type : 'TOGGLE_STEP_CLOSE_BUTTON',
      stepNum,
      value,
    }

    expect(actions.toggleStepCloseButton(stepNum, value))
      .toExist()
      .toEqual(expectedAction)
  })

  // COMPLETE_STEP
  // ********************************

  it('should create the COMPLETE_STEP action', () => {

    const stepNum = 2
    const expectedAction = {
      type : 'COMPLETE_STEP',
      stepNum,
    }

    expect(actions.completeStep(stepNum))
      .toExist()
      .toEqual(expectedAction)
  })

  // NEXT_ACTION
  // ********************************

})