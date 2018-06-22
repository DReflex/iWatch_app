import { combineReducers } from 'redux'
import Watch from './state'
import Test from './test'
import Review from './review'

const watchApp = combineReducers({
  Watch,
  Test,
  Review
})

export default watchApp
