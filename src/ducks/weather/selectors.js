export const getCurrentDate = state => state.weather.currentDate;

export const getForecastByDate = (state, date) => state.weather.byDate[date];
