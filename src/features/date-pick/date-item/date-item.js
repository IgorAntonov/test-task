import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, Day, Date, DummyData
} from './style';

export const DateItem = ({
  weekday, day, isSelected, selectDate
}) => (
  <Wrapper>
    <Day>
      {weekday}
    </Day>
    <Date
      isSelected={isSelected}
      onClick={selectDate}
    >
      {day}
    </Date>
    <DummyData>
      4 567+
    </DummyData>
  </Wrapper>
);

DateItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectDate: PropTypes.func.isRequired
};
