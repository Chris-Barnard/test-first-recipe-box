import React, { Component } from 'react';

export class Single extends Component {
  render() {
    const { image, caption } = this.props

    const styles = {
      container : {
        padding : 20,
        paddingRight : 10,
        backgroundColor : '#AAA',
        flex : '1 60%',
        border : 0,
      },
      caption : {
        backgroundColor : 'white',
        borderRadius : 6,
        marginTop : 4,
        padding : 6,
        boxShadow : '1 2 4 rgba(0, 0, 0, 0.2)',
      },
      image : {
        width : '100%',
        borderRadius : 6,
        boxShadow : '1 2 4 rgba(0, 0, 0, 0.2)',
      },
      imageBox : {
        // do I need this?
      },
    }

    return (
      <div style={styles.container} className="singleContainer">
        <div style={styles.imageBox}>
          <img style={styles.image} src={image} className="single-image" />
        </div>
        <div style={styles.caption} className="singleCaption">
          <p>{caption}</p>
        </div>
      </div>
    );
  }
}

export default Single