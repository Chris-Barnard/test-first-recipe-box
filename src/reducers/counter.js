const reducer = (state = 15, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER' :
      return state + 1
    default:
      return state
  }
}

export default reducer