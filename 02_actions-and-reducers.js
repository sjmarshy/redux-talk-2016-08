// this is an action
// an action describes a change we'd like to make to state
const incrementAction = {
  type: "redux-talk/counter/INCREMENT",
};

incrementAction

// and this is an action creator
// it's just a function that returns an action.
const increment = () => {
  return {
    type: "redux-talk/counter/INCREMENT",
  };
};

increment();

// action creators are useful if we need to define an action that
// takes a 'payload'
const incrementBy = (amount) => {
  return {
    type: "redux-talk/counter/INCREMENT_BY",
    payload: amount
  };
};

incrementBy(8);

// lets put our action types in constants for later
// this is useful when you need to access the action types across files
//
// the strings are like that to make sure they're reasonably unique
// actions could clash otherwise, and then we'd get weird results
//
const COUNTER_DECREMENT = "redux-talk/counter/DECREMENT";
const COUNTER_DECREMENT_BY = "redux-talk/counter/DECREMENT_BY";
const COUNTER_INCREMENT = "redux-talk/counter/INCREMENT";
const COUNTER_INCREMENT_BY = "redux-talk/counter/INCREMENT_BY";

// and also allows us to declare our action creators a little easier
// nobody likes writing out those strings
//
const decrement = () => {
  return {
    type: COUNTER_DECREMENT
  };
}

// there's no rules about actions except they need a 'type' key
//
const _decrementBy = (amount) => {
  return {
    type: COUNTER_DECREMENT_BY,
    amount
  };
};

_decrementBy(4);

// but you usually use 'payload' - just so you know where the associated data
// is later, when you need it
const decrementBy = (amount) => {
  return {
    type: COUNTER_DECREMENT_BY,
    payload: amount,
  };
};

decrementBy(4);

/*

  Actions are expected to be pure functions, they shouldn't perform any
  IO or side-effects. At least in unmodified redux, they shouldn't be
  asynchronous at all.

  ---

  moving on to reducers:
  this is the part that actually handles state.

  notice that we still haven't imported anything from redux...
*/

// to demonstrate, we need some state for our counter.
// in this case, our counter just needs a number
const counterState = 0;

// this is a Reducer
// immutable state is here |
//                         v     v- and this is an action
const counterReducer = (state, action) => {

  if (state == undefined) {
    state = 0;
  }
  // note that redux requires we give our reducer a default state.
  //
  // usually the core of a reducer is a big switch statement
  switch (action.type) {

    case COUNTER_INCREMENT:
      return state + 1;

    case COUNTER_DECREMENT:
      return state - 1;

    case COUNTER_INCREMENT_BY:
      return state + action.payload;

    case COUNTER_DECREMENT_BY:
      return state - action.payload;

    // we don't modify our state if none of our actions are called
    default:
      return state;
  }
};

// we can even use this right away
// notice that the state is immutable
counterReducer(counterState, increment());
counterReducer(counterState, increment());

counterReducer(
  counterReducer(counterState, increment()),
  increment());

counterReducer(counterState, incrementBy(10));

// and we still haven't imported anything from redux yet...

module.exports = {
  counterReducer,
  counterState,
  increment,
  incrementBy,
  decrement,
  decrementBy,
};
