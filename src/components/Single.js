import React, { Component } from 'react';


// import image from '../assets/photo.jpg'


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