function recipe(state, action) {
  switch(action.type) {
    case 'TOGGLE_HIGHLIGHT' :
      return { ...state,
        isHighlighted : state.id === action.id ? !state.isHighlighted : state.isHighlighted
      }
    case 'SELECT_RECIPE' :
      return { ...state,
        isSelected : state.id === action.id ? true : false
      }
    default :
      return state
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_RECIPES' :
      return action.data
    default:
      return state.map((state) => recipe(state, action))
  }
}

export default reducer