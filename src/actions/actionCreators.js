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

export function loadRecipes(data) {
  return {
    type : 'LOAD_RECIPES',
    data
  }
}

export function toggleHighlight(id) {
  return {
    type : 'TOGGLE_HIGHLIGHT',
    id
  }
}

export function selectRecipe(id, img) {
  return {
    type : 'SELECT_RECIPE',
    id,
    img
  }
}