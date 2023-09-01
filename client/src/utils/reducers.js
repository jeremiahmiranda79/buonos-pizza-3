import { useReducer } from 'react';
import {
  UPDATE_PIZZAS,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PIZZAS:
      return {
        ...state,
        pizzas: [...action.pizzas],
      };
    // This saves us from a crash.
    default:
      return state;
  }
};

export function usePizzaReducer(initialState) {
  return useReducer(reducer, initialState);
}