import React, { Component } from 'react';

export class Single extends Component {
  render() {
    const { image } = this.props

    return (
      <div className="single-container">
        <img src={image} className="single-image" />
      </div>
    );
  }
}

export default Single