function reducer(state = {}, action) {
  switch(action.type) {
    case 'SELECT_RECIPE' :
      return { ...state,
        mainImage : action.img,
        mainCaption : action.caption,
      }
    default :
      return state
  }

}

export default reducer