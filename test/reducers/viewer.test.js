import expect from 'expect';
import reducer from '../../src/reducers/viewer';
describe('reducers', () => {

  describe('viewer reducer', () => {

    // INITIALIZE
    // ********************************

    it('should provide an initial state', () => {

      const initialState = undefined

      const action = {
        type : '@@INIT'
      }

      const expectedState = {}

      expect(reducer(initialState, action)).toEqual(expectedState);

    })

    // SELECT_RECIPE
    // ********************************

    it('should handle action SELECT_RECIPE', () => {

      const initialState = {
        mainImg : 'junk'
      }

      const action = {
        type : 'SELECT_RECIPE',
        id : 100,
        img : 'other.jpg'
      }

      const expectedState = {
        mainImg : 'other.jpg'
      }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState)

    })

  });

})