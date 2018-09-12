import { connect } from 'react-redux';

import { actions } from 'Src/ducks/weather';
import { DatePick } from './date-pick';

const { changeDate } = actions;

export const DatePickContainer = connect(null, { changeDate })(DatePick);
