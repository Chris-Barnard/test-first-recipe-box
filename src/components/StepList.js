import React, { Component } from 'react';
import FlipMove from 'react-flip-move'
import defaultImage from '../assets/photo.jpg'

function m() {
  let res = {}
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      Object.assign(res, arguments[i])
    }
  }
  return res
}

export class StepList extends Component {

  render() {

    const styles = {
      container : {
        flex : '1 30%',
        listStyleType : 'none',
        background : '#AAA',
        margin : 0,
        paddingTop : 0,
        paddingLeft : 0,
        border : 0,
      },
      card : {
        backgroundColor : 'white',
        padding : 6,
        paddingRight : 44,
        margin : 10,
        borderRadius : 6,
        position : 'relative',
        display : 'flex',
      },
      image : {
        margin : 6,
        width : '100%',
        header : {
          flex : '1 40%',
        },
        footer : {
          margin : 3,
        }
      },
      caption : {
        header : {
          paddingLeft : 10,
          flex : '1 60%',
        }
      },
      closeButton : {
        position : 'absolute',
        right : 6,
        top : 6,
        margin : 'auto',
        width : 32,
        height : 32,
        fontSize : 20,
        borderRadius : 4,
        color : '#fff',
        background : '#61DAFB',
        opacity : '0.8',
        visibility : 'hidden',
        active : {
          visibility : 'visible'
        }
      }
    }

    const { list, complete, toggleCompleteButton } = this.props

    return (
      <FlipMove
        easing="ease-in-out"
        enterAnimation="accordianVertical"
        leaveAnimation="accordianVertical"
        duration={500}
        staggerDurationBy={30}
        staggerDelayBy={18}
        style={styles.container}
        typeName="ul"
        className="stepList"
      >
        {list.map((item, i) => {
          return (
            <li className="stepCard"
              style={styles.card}
              key={item.id}
              onMouseOver={() => toggleCompleteButton(item.id, true)}
              onMouseOut={() => toggleCompleteButton(item.id, false)}
            >
              <div style={styles.image.header}>
                <img src={item.image ? item.image : defaultImage} style={styles.image} />
                <h5 className="timeEstimate" style={styles.image.footer} >{item.timeEstimate} minutes</h5>
              </div>
              <div style={styles.caption.header} >
                {item.caption}
              </div>
              <button className="stepCardCloseButton"
                style={m(
                styles.closeButton,
                item.showCloseButton && styles.closeButton.active
              )} onClick={(e) => {
                e.preventDefault()
                return complete(item.id)
              }} ><span>&times;</span></button>
            </li>
          )
        })}
      </FlipMove>
    );
  }
}

export default StepList
