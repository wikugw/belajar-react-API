const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
}

// reducer
const rootReducer = (state = initialState, action) => {
  return state;
}
// store
const store = createStore(rootReducer);
console.log(store.getState());
// dispatching action

// subscription