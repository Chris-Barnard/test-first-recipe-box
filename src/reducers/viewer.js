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
    case 'COMPLETE_STEP' :
      // console.log(JSON.stringify(action.activeRecipe))
      let activeRecipe = JSON.parse(JSON.stringify(action.activeRecipe))
      let newSteps = activeRecipe.steps.filter(x => x.id !== action.stepNum)
      newSteps.sort(x => -x.id)
      // console.log(JSON.stringify(action.activeRecipe))
      return { ...state,
        mainCaption : newSteps[0] ? newSteps[0].caption : activeRecipe.mainCaption,
        mainImage : newSteps[0] ? newSteps[0].image : activeRecipe.mainImage
      }
    default :
      return state
  }

}

export default reducer