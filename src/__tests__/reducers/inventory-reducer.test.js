import inventoryReducer from '../../reducers/inventory-reducer';
import { formatDistanceToNow } from 'date-fns';
import * as c from '../../actions/ActionTypes'

describe('inventoryReducer', () => {

  const currentState = {
    1: {
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      id: 1
    }, 2: {
      name: 'Marionberry Pie',
      mainIngredient: 'Marionberries',
      iceCreamPairing: 'Vanilla Bean',
      price: 17.99,
      id: 2
    }
  }

  let action;
  const crateData = {
    name: 'Apple Pie',
    mainIngredient: 'Apples',
    iceCreamPairing: 'Vanilla',
    price: 12.99,
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), { addSuffix: true }),
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(inventoryReducer({}, { type: null })).toEqual({});
  });

  test('Shoudl successfully add new crate date to inventory that includes date-fns-formatted wait times', () => {
    const { name, mainIngredient, iceCreamPairing, price, timeOpen, formattedWaitTime, id } = crateData;
    action = {
      type: 'ADD_CRATE',
      name: name,
      mainIngredient: mainIngredient,
      iceCreamPairing: iceCreamPairing,
      price: price,
      timeOpen,
      formattedWaitTime,
      id: id
    };

    expect(inventoryReducer({}, action)).toEqual({
      [id]: {
        name: name,
        mainIngredient: mainIngredient,
        iceCreamPairing: iceCreamPairing,
        price: price,
        timeOpen,
        formattedWaitTime,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_CRATE',
      id: 1
    }
    expect(inventoryReducer(currentState, action)).toEqual({
      2: {
        name: 'Marionberry Pie',
        mainIngredient: 'Marionberries',
        iceCreamPairing: 'Vanilla Bean',
        price: 17.99,
        id: 2
      }
    });
  });

  test('Should add a formatted wait time to crate entry', () => {
    const { name, mainIngredient, iceCreamPairing, price, timeOpen, id } = crateData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes ago',
      id
    };
    expect(inventoryReducer({ [id]: crateData }, action)).toEqual({
      [id]: {
        name,
        mainIngredient,
        iceCreamPairing,
        price,
        timeOpen,
        id,
        formattedWaitTime: '4 minutes ago'
      }
    })
  })

  });