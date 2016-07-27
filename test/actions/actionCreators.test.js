import expect from 'expect'
import * as actions from '../../src/actions/actionCreators'

describe('actions', () => {
 
  // INCREMENT_COUNTER
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

  })

  // NEXT_ACTION
  // ********************************

})