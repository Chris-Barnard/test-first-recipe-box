export function incrementCounter() {
  return {
    type : 'INCREMENT_COUNTER'
  }
}

export function setCounter(value) {
	return {
		type : 'SET_COUNTER',
		value
	}
}