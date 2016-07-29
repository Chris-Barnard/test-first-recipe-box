import { combineReducers } from 'redux'

import counter from './counter'
import recipes from './recipes'
import viewer from './viewer'

const rootReducer = combineReducers({
  counter,
  recipes,
  viewer
})

export default rootReducer