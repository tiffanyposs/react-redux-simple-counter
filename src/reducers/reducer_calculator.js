import {
  INCREASE_COUNTER,
  UPDATE_INCREMENT
} from '../actions/types';

const INITIAL_STATE = {
  counter: 0,
  increaseSelected: 1
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INCREASE_COUNTER:
    return { ...state, counter: action.payload };
  case UPDATE_INCREMENT:
    return { ...state, increaseSelected: action.payload };
  default:
    return state;
  }
}
