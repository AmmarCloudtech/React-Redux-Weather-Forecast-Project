// AVOIDING STATE MUTATIONS IN REDUCERS

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // we could have done state.push(action.payload.data) but that would have manipulated the existing array. Which we strictly DO NOT WANT
    //  return state.concat([action.payload.data]); // this one and the lower one are nearly completely identical.
      return [ action.payload.data, ...state ]; // ES6 syntax which is equivalent to above line written
                                                // this line says make a new array and fill it with result of action.payload.data
                                                // then take another array i.e. ...state (because of 3 dots ES6 takes it as an array)
                                                // empty it and put its values in that newley created array (outside array).
                                                // NOTE: action.payload.data IS INSERTED ON THE TOP OF NEWLEY CREATED ARRAY.
  }
  return state;
}
