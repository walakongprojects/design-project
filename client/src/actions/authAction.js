import { INCREMENT, DECREMENT } from './types';

export const increaseCounter = () => ({
  type: INCREMENT,
});

export const decreaseCounter = () => ({
  type: DECREMENT,
});
