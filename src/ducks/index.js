import { combineReducers } from 'redux';

import { reducer as weather } from './weather';

export const rootReducer = combineReducers({
  weather
});
