import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import Title from '../Title'
import EventDate from '../EventDate'

import css from "./index.module.scss";

class Pane extends Component {
  render() {
    return(
      <div className={`${css.pane} ${this.props.cover ? css.withCover : ''}`}>
        {
          this.props.cover && (
            <div className={css.cover} style={{ 
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(1, 36, 29, 0.6)), url(" + this.props.event.cover + ")"}}></div>
            )
          }
        <EventDate date={this.props.event.date} bgWhite={this.props.cover}></EventDate>
        {!this.props.cover && <div id={css.eventIcon}>{this.props.event.icon}</div>}
        <div id={this.props.cover ? css.titleDivCover : css.titleDiv}>
          <Title cover={this.props.cover}>{this.props.event.title}</Title>
          <div className={css.row}>
            <FontAwesomeIcon style={{color: "#28a49a"}} icon={faMapMarkerAlt} />
            <div className={`${css.address} ${this.props.cover ? css.addressCover : ''}`}>
              {this.props.event.address.place}
            </div>
          </div>
        </div>
        {this.props.cover ? 
          <div className={css.eventButton}>
            <Button onClick={() =>  location.href=this.props.event.url} size="sm">
              <FontAwesomeIcon icon={faChevronRight}/>
            </Button>
          </div>
        : null}
        
      </div>
    )
  }
}

Pane.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    cover: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string,
  }),
  cover: PropTypes.bool,
};

Pane.defaultProps = {
  event: {
    title: "Default title",
    date: "01/01/2022"
  }
};

export default Pane;
