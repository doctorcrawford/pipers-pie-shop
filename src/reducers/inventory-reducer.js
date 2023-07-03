const reducer = (state = {}, action) => {
  const { name, mainIngredient, iceCreamPairing, price, id } = action;
  switch (action.type) {
    case 'ADD_CRATE':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          mainIngredient: mainIngredient,
          iceCreamPairing: iceCreamPairing,
          price: price,
          id: id
        }
      });
    case 'DELETE_CRATE':
      let newState = { ...state };
    delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;