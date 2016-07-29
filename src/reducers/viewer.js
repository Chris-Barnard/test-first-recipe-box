function reducer(state = {}, action) {
  switch(action.type) {
    case 'SELECT_RECIPE' :
      return { ...state,
        mainImage : action.img
      }
    default :
      return state
  }

}

export default reducer