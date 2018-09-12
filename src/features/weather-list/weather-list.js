import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatToISO } from 'Src/lib/date-functions';
import { Wrapper, Header, List } from './style';

const intervals = [
  '00:00 — 03:00',
  '03:00 — 06:00',
  '06:00 — 09:00',
  '09:00 — 12:00',
  '12:00 — 15:00',
  '15:00 — 18:00',
  '18:00 — 21:00',
  '21:00 — 24:00',
];

export class WeatherList extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired,
    currentDate: PropTypes.number.isRequired
  }

  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  getDayInitialTime = () => {
    const { currentDate } = this.props;
    const initialTime = new Date(currentDate).setHours(0, 0, 0, 0);
    return initialTime;
  }

  getDayIntervalTime = (initialTime, offset) => {
    const ms = initialTime + 1000 * 60 * 60 * 3 * offset;
    return formatToISO(ms);
  }

  render() {
    const initialTime = this.getDayInitialTime();
    return (
      <Wrapper>
        <Header>
          Прогноз погоды
        </Header>
        <List>
          {intervals.map((interval, i) => (
            <div>
              {interval} {this.getDayIntervalTime(initialTime, i)}
            </div>
          ))}
        </List>
      </Wrapper>
    );
  }
}
