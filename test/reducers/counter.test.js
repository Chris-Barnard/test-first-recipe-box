import expect from 'expect';
import reducer from '../../src/reducers/counter';
describe('reducers', () => {

  describe('counter reducer', () => {

    // INITIALIZE
    // ********************************

    it('should provide an initial state', () => {

      const initialState = undefined

      const action = {
        type : '@@INIT'
      }

      const expectedState = 0

      expect(reducer(initialState, action)).toEqual(expectedState);

    })

    // INCREMENT_COUNTER
    // ********************************

    it('should handle action INCREMENT_COUNTER', () => {

      const initialState = 16

      const action = {
        type : 'INCREMENT_COUNTER'
      }

      const expectedState = 17

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState);
    
    });

    // INCREMENT_COUNTER
    // ********************************

    it('should handle action SET_COUNTER', () => {

      const initialState = 32

      const action = {
        type : 'SET_COUNTER',
        value : 12
      }

      const expectedState = 12

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState)

    })

  });

})