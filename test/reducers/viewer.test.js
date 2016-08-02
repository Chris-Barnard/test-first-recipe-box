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
        mainImage : 'junk',
        mainCaption : "the oldies aren't always goodies"
      }

      const action = {
        type : 'SELECT_RECIPE',
        id : 100,
        img : 'other.jpg',
        caption : 'sometimes a new day dawns'
      }

      const expectedState = {
        mainImage : 'other.jpg',
        mainCaption : 'sometimes a new day dawns',
        mode : 'title',
      }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState)

    })

    // BEGIN_STEP

    it('should handle action BEGIN_STEP', () => {

      const initialState = {
        mainImage : 'junk',
        mainCaption : "the oldies aren't always goodies"
      }

      const action = {
        type : 'BEGIN_STEP',
        image : 'test',
        caption : 'testing it out!!!'
      }

      const expectedState = {
        mainImage : 'test',
        mainCaption : 'testing it out!!!',
        mode : 'steps',
      }

      expect(reducer(initialState, action))
        .toExist()
        .toEqual(expectedState)

    })

  });

})