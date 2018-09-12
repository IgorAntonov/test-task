import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { actions } from './actions';

const initialState = {
  currentDate: Date.now(),
  byDate: {},
  isLoading: false,
  error: null
};

const currentDate = createReducer({
  [actions.changeDate]: (state, payload) => payload
}, initialState.currentDate);

const byDate = createReducer({
  [actions.successWeather]: (state, payload) => payload
}, initialState.byDate);

const isLoading = createReducer({
  [actions.requestWeather]: () => true,
  [actions.successWeather]: () => false,
  [actions.failureWeather]: () => false,
}, initialState.isLoading);

const error = createReducer({
  [actions.requestWeather]: () => null,
  [actions.failureWeather]: (state, payload) => payload
}, initialState.error);

export const reducer = combineReducers({
  currentDate,
  byDate,
  isLoading,
  error
});
