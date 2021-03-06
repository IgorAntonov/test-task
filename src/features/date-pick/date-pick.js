import React, { Component } from 'react';
import Slider from 'react-slick';

import { DateItem } from './date-item';
import {
  Wrapper, MonthHeader, CalendarIcon,
  Month, ScrollWrapper
} from './style';

export class DatePick extends Component {
  state = {
    days: [],
    selectedDate: null,
    selectedMonth: null
  };

  componentDidMount() {
    const currentDate = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Array(31).fill().map((item, i) => {
      const ms = currentDate - (15 - i) * oneDay;
      const date = new Date(ms);
      const weekday = date.toLocaleString('ru', { weekday: 'short' });
      const day = date.toLocaleString('ru', { day: '2-digit' });
      return {
        weekday,
        day,
        ms
      };
    });
    const month = new Date(currentDate).toLocaleString('ru', { month: 'long' });
    this.setState({
      days,
      selectedDate: currentDate,
      selectedMonth: month
    });
  }

  loadNewDates = index => {
    const { days } = this.state;
    const oneDay = 1000 * 60 * 60 * 24;
    if (index > days.length - 10) {
      const lastDay = days[days.length - 1].ms;
      const newDays = Array(30).fill().map((item, i) => {
        const ms = lastDay + oneDay * (i + 1);
        const date = new Date(ms);
        const weekday = date.toLocaleString('ru', { weekday: 'short' });
        const day = date.toLocaleString('ru', { day: '2-digit' });
        return {
          weekday,
          day,
          ms
        };
      });
      this.setState(prevState => ({
        days: [...prevState.days, ...newDays]
      }));
    }
    if (index < 10) {
      const firstDay = days[0].ms;
      const newDays = Array(30).fill().map((item, i) => {
        const ms = firstDay - oneDay * (i + 1);
        const date = new Date(ms);
        const weekday = date.toLocaleString('ru', { weekday: 'short' });
        const day = date.toLocaleString('ru', { day: '2-digit' });
        return {
          weekday,
          day,
          ms
        };
      }).reverse();
      this.setState(prevState => ({
        days: [...newDays, ...prevState.days]
      }));
      this.slider.slickGoTo(index + 30, true);
    }
  }

  isDateSelected = ms => {
    const { selectedDate } = this.state;
    return ms === selectedDate;
  }

  selectDate = ms => () => {
    const { changeDate } = this.props;
    this.setState({ selectedDate: ms });
    changeDate(ms);
  };

  changeDate = i => {
    const { days } = this.state;
    const month = new Date(days[i].ms).toLocaleString('ru', { month: 'long' });
    this.setState({ selectedMonth: month });
  }

  render() {
    const { days, selectedMonth } = this.state;
    const settings = {
      infinite: false,
      initialSlide: 13,
      draggable: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 5,
      arrows: false,
      afterChange: index => {
        this.loadNewDates(index);
      },
      beforeChange: (oldI, newI) => {
        this.changeDate(newI);
      }
    };
    return (
      <Wrapper>
        <MonthHeader>
          <CalendarIcon />
          <Month>
            {selectedMonth}
          </Month>
        </MonthHeader>
        <ScrollWrapper>
          <Slider {...settings} ref={slider => (this.slider = slider)}>
            {days.map(day => (
              <DateItem
                weekday={day.weekday}
                day={day.day}
                key={day.ms}
                isSelected={this.isDateSelected(day.ms)}
                selectDate={this.selectDate(day.ms)}
              />
            ))}
          </Slider>
        </ScrollWrapper>
      </Wrapper>
    );
  }
}
