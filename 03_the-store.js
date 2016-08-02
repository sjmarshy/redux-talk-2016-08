/*
  finally, we get to the bit that redux handles - the store.

  This acts as a wrapper around our state, and provides a few
  bits and pieces to make dealing with it easier.
*/
const redux = require("redux");
const actionsAndReducers = require("./02_actions-and-reducers");

// we pass the 'createStore' function our reducer
const store = redux.createStore(actionsAndReducers.counterReducer);

store

/*
  we can see we get a few functions:
  - dispatch (this dispatches an action into our store)
  - subscribe (calls a function whenever the store is updated)
  - getState (returns a read-only view on the state)
  - replaceReducer (this isn't used often, allows us to swap out the reducer)
*/

// we can dispatch our actions into the store
// dispatch returns the action you dispatched
store.dispatch(actionsAndReducers.incrementBy(100));

// we can see our change has been made permenent now
store.getState();
store.getState();

store.dispatch(actionsAndReducers.decrementBy(50));

store.getState();

store.dispatch(actionsAndReducers.decrement())

store.getState();


// we can also trigger something on an update
//
// an unsubscribe function is returned from subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actionsAndReducers.decrementBy(10));
store.dispatch(actionsAndReducers.increment());

// hopefully, this all makes sense =)
//
// if there are any questions I can answer,
// or if you just want to embarass me by making me do some live coding
//    please, feel free!
