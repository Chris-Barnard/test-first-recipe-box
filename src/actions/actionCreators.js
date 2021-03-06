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

export function selectRecipe(id, img, caption) {
  return {
    type : 'SELECT_RECIPE',
    id,
    img,
    caption
  }
}

export function toggleStepCloseButton(stepNum, value) {
  return {
    type : 'TOGGLE_STEP_CLOSE_BUTTON',
    stepNum,
    value,
  }
}

export function completeStep(stepNum, activeRecipe) {
  return {
    type : 'COMPLETE_STEP',
    stepNum,
    activeRecipe,
  }
}

export function beginStep(image, caption) {
  return {
    type : 'BEGIN_STEP',
    image,
    caption
  }
}