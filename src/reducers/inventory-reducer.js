import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, mainIngredient, iceCreamPairing, price, numberOfPies, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
    case c.ADD_CRATE:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          mainIngredient: mainIngredient,
          iceCreamPairing: iceCreamPairing,
          price: price,
          numberOfPies: numberOfPies,
          timeOpen,
          formattedWaitTime,
          id: id
        }
      });
    case c.DELETE_CRATE:
      let newState = { ...state };
    delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const newCrate = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newCrate
      })
      return updatedState;
    default:
      return state;
  }
};

export default reducer;