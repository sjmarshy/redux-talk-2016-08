/*
  for a little extra credit, we can also take a look at middleware

  say we wanted to implement a logger. We want a logger that shows every action
  that passes through our system - as it's passing. We can't do this using
  store.subscribe, because by the time we get there, it's too late - we don't
  know what action happened.

  This is where middleware is perfect. it sits between actions and reducers,
  allowing you to monitor, modify and trigger events based on actions

  The redux website goes into a whole scenario, teaching you why monkeypatching
  is bad, and why plugin architecture is good. I'll just show you how to
  use middleware - but you should go read the redux website's version, it's good
*/

// middleware happens to be a function which returns a function, which returns a function.
// we could do this store => { return next => { return action => { /*.... */ }}}
// but this is less verbose
const loggerMiddleware = store => next => action => {

  // the content should be reasonably straight forwards
  console.log('triggering action: ', action);
  // next here is just action,
  // so as we saw earlier, the result will just be the action we dispatched
  var result = next(action);
  console.log('with new state: ', store.getState());

  return result;
};

const redux = require("redux");
const actionsAndReducers = require("./02_actions-and-reducers");

const store = redux.createStore(
  actionsAndReducers.counterReducer, // exactly what we did in the last file
  redux.applyMiddleware(loggerMiddleware)
  // but this time passing the result of apply middleware
)


store.dispatch(actionsAndReducers.increment());
store.dispatch(actionsAndReducers.decrementBy(3));
// we can easily see what's happening to our application as it happens.
// another use could be to trigger a side-effect.
