import React, { Component } from 'react';

export class Single extends Component {
  render() {
    const { image } = this.props

    const styles = {
      container : {
        paddingTop : 12,
        backgroundColor : '#222'
      }
    }

    return (
      <div style={styles.container} className="singleContainer">
        <img src={image} className="single-image" />
        <div className="singleCaption">
          <p>Test Text</p>
        </div>
      </div>
    );
  }
}

export default Single