const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER' :
      return state + 1
    case 'SET_COUNTER' : 
    	return action.value
    default:
      return state
  }
}

export default reducer