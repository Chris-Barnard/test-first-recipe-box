function reducer(state = {}, action) {
  switch(action.type) {
    case 'SELECT_RECIPE' :
      return { ...state,
        mainImage : action.img,
        mainCaption : action.caption,
        mode : 'title',
      }
    case 'LOAD_RECIPES' :
      return { ...state,
        mainImage : action.data[0] ? action.data[0].mainImage : state.mainImage,
        mainCaption : action.data[0] ? action.data[0].mainCaption : state.mainCaption,
        mode : 'title',
      }
    case 'BEGIN_STEP' :
      return { ...state,
        mainImage : action.image,
        mainCaption : action.caption,
        mode : 'steps',
      }
    default :
      return state
  }

}

export default reducer