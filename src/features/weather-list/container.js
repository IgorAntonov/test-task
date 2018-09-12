import { connect } from 'react-redux';

import { fetchForecast, getCurrentDate } from 'Src/ducks/weather';
import { WeatherList } from './weather-list';

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state)
});

export const WeatherListContainer = connect(
  mapStateToProps,
  { fetchForecast }
)(WeatherList);
