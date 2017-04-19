import React, { Component } from 'react';
import './favorites.css';


export default class Favorites extends Component {


  render(){
    const { favorites } = this.props
    console.log(favorites);
    return (
      <div>hi</div>
    );
  };
};
