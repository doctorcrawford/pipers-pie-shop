import formVisibleReducer from './form-visible-reducer';
import inventoryReducer from './inventory-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainInventory: inventoryReducer
});

export default rootReducer;