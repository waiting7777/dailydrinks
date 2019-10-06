import { ADD_ORDER, REMOVE_ORDER, EDIT_ORDER } from './actionTypes';

export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order
})

export const removeOrder = id => ({
  type: REMOVE_ORDER,
  payload: id
})

export const editOrder = order => ({
  type: EDIT_ORDER,
  payload: order
})