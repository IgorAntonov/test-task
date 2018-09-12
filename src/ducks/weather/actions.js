import { createAction } from 'redux-act';

export const actions = {
  requestWeather: createAction('weather/REQUEST'),
  successWeather: createAction('weather/SUCCESS'),
  failureWeather: createAction('weather/FAILURE'),
  changeDate: createAction('weather/CHANGE_DATE')
};
