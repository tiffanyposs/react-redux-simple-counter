import { INCREASE_COUNTER, UPDATE_INCREMENT } from './types';

export function incrementUpdated(value) {
  return {
    type: UPDATE_INCREMENT,
    payload: value
  }
}

export function increaseCounter(value) {
  return {
    type: INCREASE_COUNTER,
    payload: value
  }
}
