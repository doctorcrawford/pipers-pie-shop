import rootReducer from '../../reducers/index';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import inventoryReducer from '../../reducers/inventory-reducer';
import * as c from '../../actions/ActionTypes';

// let store = createStore(rootReducer);
let store = configureStore({reducer: rootReducer});

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainInventory: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of inventoryReducer matches root reducer', () => {
    expect(store.getState().mainInventory).toEqual(inventoryReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_CRATE action works for inventoryReducer and root reducer', () => {
    const action = {
      type: 'ADD_CRATE',
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainInventory).toEqual(inventoryReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});