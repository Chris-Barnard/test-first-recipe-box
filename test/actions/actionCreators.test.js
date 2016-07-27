import expect from 'expect'
import * as actionCreators from '../../src/actions/actionCreators'

describe('action creators', () => {
 
  // INCREMENT_COUNTER
  // ********************************

  it('should create INCREMENT_COUNTER action', () => {

    const expectedAction = {
      type : 'INCREMENT_COUNTER'
    }

    expect(actionCreators.incrementCounter()).toEqual(expectedAction)

  })

})