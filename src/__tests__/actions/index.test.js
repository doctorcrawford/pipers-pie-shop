import * as a from './../../actions';

describe('Inventory actions', () => {
  it('deleteCrate should create DELETE_CRATE action', () => {
    expect(a.deleteCrate(1)).toEqual({
      type: 'DELETE_CRATE',
      id: 1
    })
  })

  it('addCrate should create ADD_CRATE action', () => {
    expect(a.addCrate({
      type: 'ADD_CRATE',
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      numberofPies: 130,
      id: 1
    })).toEqual({
      type: 'ADD_CRATE',
      name: 'Apple Pie',
      mainIngredient: 'Apples',
      iceCreamPairing: 'Vanilla',
      price: 12.99,
      numberofPies: 130,
      id: 1
    })
  })

})