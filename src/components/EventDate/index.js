import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class EventDate extends Component {
  constructor(props) {
    super(props);

    const newDate = new Date(props.date)
    this.state = {
      day: newDate.getDate().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }),
      month: newDate.getMonth().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    };
  }

  render() {
    return(
      <div className={`${css.date} ${this.props.bgWhite ? css.bgWhite : ''}`}>
        <div id={css.day}>{this.state.day} </div>
        <hr></hr>
        <div id={css.month}>{this.state.month}</div>
      </div>
    )
  }
}

EventDate.propTypes = {
  date: PropTypes.string,
  bgWhite: PropTypes.bool
};

EventDate.defaultProps = {
  date: "01/01/2022"
};

export default EventDate;