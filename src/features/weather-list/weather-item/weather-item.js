import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, Flex, Time,
  Temp, Info, NoForecast
} from './style';

export const WeatherItem = ({ interval, forecast }) => {
  if (Object.keys(forecast).length < 3) {
    return (
      <Wrapper>
        <Flex>
          <Time>{interval}</Time>
          <NoForecast>
            На указанную дату прогноз отсутствует
          </NoForecast>
        </Flex>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Flex>
        <Time>{interval}</Time>
        <Temp>{forecast.temp}℃</Temp>
      </Flex>
      <Info>
        Ветер: {forecast.wind} м/с
      </Info>
      <Info>
        {forecast.weather}
      </Info>
    </Wrapper>
  );
};

WeatherItem.defaultProps = {
  forecast: {}
};

WeatherItem.propTypes = {
  interval: PropTypes.string.isRequired,
  forecast: PropTypes.shape({
    temp: PropTypes.number,
    wind: PropTypes.number,
    weather: PropTypes.string
  })
};
