import expect from 'expect';
import reducer from '../../src/reducers/index';

describe('root reducer', () => {

  // INITIALIZE
  // ********************************

  it('should provide an initial state', () => {

    const initialState = undefined

    const action = {
      type : '@@INIT'
    }

    const expectedState = false

    expect(!reducer(initialState, action)).toEqual(expectedState);

  })

});