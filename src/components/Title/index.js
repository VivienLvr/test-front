import React, { Component } from 'react';
import PropTypes from 'prop-types';
import main from "../../assets/styles/main.scss"

import css from "./index.module.scss";

class Title extends Component {
  render() {
    return(
      <h1 className={`${css.title} ${this.props.cover ? css.cover : ''}`}>{this.props.children}</h1>
    )
  }
}

Title.propTypes = {};
Title.defaultProps = {};

export default Title;
