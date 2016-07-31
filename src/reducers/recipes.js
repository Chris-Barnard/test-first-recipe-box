function recipeReducer(state, action) {
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

const recipeListReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_RECIPES' :
      return action.data
    default:
      return state.map((state) => recipeReducer(state, action))
  }
}

function stepReducer(state = {}, action) {
  switch(action.type) {
    case 'TOGGLE_STEP_CLOSE_BUTTON' :
      return { ...state,
        showCloseButton : state.id === action.stepNum ? action.value : false
      }
    default :
      return state
  }
}


// receives the global state for the recipes key in state
// it needs access to the recipeList which it shares this key with
function activeRecipeReducer(state, action) {

  switch(action.type) {
    case 'SELECT_RECIPE' :
      let item = state.recipeList.filter((item) => item.id === action.id).pop()
      return {...item, 
        isSelected : true,
        steps : item.steps === undefined ? [] : item.steps
      }
    case 'TOGGLE_STEP_CLOSE_BUTTON' :
      return { ...state.activeRecipe,
        steps : state.activeRecipe.steps.map((step) => stepReducer(step, action))
      }
    case 'COMPLETE_STEP' :
      const index = state.activeRecipe.steps.findIndex((step) => step.id === action.stepNum)

      return { ...state.activeRecipe,
        steps : [ 
          ...state.activeRecipe.steps.slice(0, index),
          ...state.activeRecipe.steps.slice(index + 1)
        ]
      }
    default : 
      return { ...state.activeRecipe,
        steps : state.activeRecipe.steps === undefined ? [] : state.activeRecipe.steps
      }
  }
}

function reducer(state = {
    recipeList : [],
    activeRecipe : {}
  }, action) {
    return {
      recipeList : recipeListReducer(state.recipeList, action),
      activeRecipe : activeRecipeReducer(state, action)
    }
}

export default reducer