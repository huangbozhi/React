import { combineReducers } from 'redux';
import todos from './todos';
import filterReducer from './filter'

export default combineReducers({
  todos,
  filterTypr: filterReducer
})