import expect from 'expect';
import reducer from '../../src/reducers/index';

describe('reducers', () => {

  describe('root reducer', () => {

    // INITIALIZE
    // ********************************

    it('should provide an initial state', () => {

      const initialState = undefined

      const action = {
        type : '@@INIT'
      }

      expect(reducer(initialState, action))
        .toExist()
        .toIncludeKey('counter');

    })

  });

})