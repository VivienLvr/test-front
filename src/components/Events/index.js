import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from '../Pane'
import Img from "../Pane/gardener_cover.png";

import css from "./index.module.scss";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      selectedEvent: this.props.events[0]
    };
    this.state.events[0].cover = Img;
  }

  selectEvent(event) {
    this.setState({
      selectedEvent: event
    })
  }
  
  render() {
    console.log(this.props.events)
    return (
      <div className={css.events}>
        {!this.props.events ? 'No events found' : (
          this.props.events.map((event) => {
            // Only the selected event will have its cover displayed
            const cover = event == this.state.selectedEvent;
            return (
              <div onClick={() => this.selectEvent(event)}>
                <Pane event={event} cover={cover}/>
                <div style={{height: '10px'}}/>
              </div>
            )
        })
        )}
      </div>
    )
  }
}

Events.propTypes = {
  events: PropTypes.array,
};

Events.defaultProps = {
};

export default Events;