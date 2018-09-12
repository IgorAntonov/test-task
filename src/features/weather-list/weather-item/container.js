import { connect } from 'react-redux';

import { getForecastByDate } from 'Src/ducks/weather';
import { WeatherItem } from './weather-item';

const mapStateToProps = (state, { date }) => ({
  forecast: getForecastByDate(state, date)
});

export const WeatherItemContainer = connect(mapStateToProps)(WeatherItem);
