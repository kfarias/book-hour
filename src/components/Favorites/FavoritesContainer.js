
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Favorites            from './Favorites';

const mapStateToProps = (state) => {
  return state
};


export default connect(mapStateToProps, null)(Favorites);
