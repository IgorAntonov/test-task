import { weatherAPI } from './api';
import { actions } from './actions';

export const fetchForecast = () => async dispatch => {
  dispatch(actions.requestWeather());

  try {
    const { data: { list } } = await weatherAPI.get();
    const payload = list.reduce((acc, cur) => {
      const key = cur.dt_txt;
      const value = {
        temp: cur.main.temp,
        wind: cur.wind.speed,
        weather: cur.weather[0].description
      };
      return { ...acc, [key]: value };
    }, {});

    dispatch(actions.successWeather(payload));
  } catch (err) {
    dispatch(actions.failureWeather(err.message));
  }
};
