import React, { Component } from 'react';
// import FlipMove from 'react-flip-move'

function m() {
  let res = {}
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      Object.assign(res, arguments[i])
    }
  }
  return res
}

export class Single extends Component {
  render() {

    const styles = {
      container : {
        // position : 'fixed',
        padding : 20,
        paddingTop : 10,
        paddingRight : 11,
        backgroundColor : '#AAA',
        flex : '1 40%',
        border : 0,
        marginRight : -1,
      },
      caption : {
        backgroundColor : 'white',
        borderRadius : 6,
        marginTop : 4,
        padding : 6,
        boxShadow : '1 2 4 rgba(0, 0, 0, 0.2)',
      },
      image : {
        // position : 'fixed',
        width : '100%',
        borderRadius : 6,
        boxShadow : '1 2 4 rgba(0, 0, 0, 0.2)',
      },
      imageBox : {
        // do I need this?
      },
    }

    const { viewer } = this.props

    return (
      <div
        style={m(styles.container
          // viewer.mode === 'title' ? styles.container.title : styles.container.steps
        )}
        className="singleContainer"
      >
        <div key='image' style={styles.imageBox}>
          <img style={styles.image} src={viewer.mainImage} className="single-image" />
        </div>
        <div key='caption' style={styles.caption} className="singleCaption" >
          <p>
            {viewer.mainCaption}
          </p>
        </div>
      </div>
    );
  }
}

export default Single