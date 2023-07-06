import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('Inventory actions', () => {
  it('deleteCrate should create DELETE_CRATE action', () => {
    expect(a.deleteCrate(1)).toEqual({
      type: c.DELETE_CRATE,
      id: 1
    })
  })

  it('addCrate should create ADD_CRATE action', () => {
    expect(a.addCrate({
      type: c.ADD_CRATE,
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      numberOfPies: 130,
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: c.ADD_CRATE,
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      numberOfPies: 130,
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago',
      id: 1
    })
  })

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })

  it('updateTime should create UPDATE_TIME action', () => {
    expect(a.updateTime(1, 'less than a minute ago')).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: 'less than a minute ago'
    });
  });
  
})