import { combineReducers } from 'redux';  
import map from './map';
import countries from './countries';
  
const createRootReducer = () => combineReducers({
    map,
    countries
})  
  
export default createRootReducer 