import { combineReducers } from 'redux'
import Watch from './state'
import Test from './test'

const watchApp = combineReducers({
  Watch,
  Test
})

export default watchApp
