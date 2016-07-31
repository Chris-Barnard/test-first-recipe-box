import React, { Component } from 'react';
import FlipMove from 'react-flip-move'

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
    const { list, complete, toggleCompleteButton } = this.props

    const styles = {
      container : {
        flex : '1 30%',
        listStyleType : 'none',
        background : '#AAA',
        margin : 0,
        paddingTop : 20,
        paddingLeft : 0,
        border : 0,
      },
      card : {
        backgroundColor : 'white',
        padding : 6,
        margin : 10,
        borderRadius : 6,
        position : 'relative',
      },
      closeButton : {
        position : 'absolute',
        right : 10,
        top : 0,
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

    return (
      <FlipMove
        easing="ease-in-out"
        enterAnimation="accordianVertical"
        leaveAnimation="accordianVertical"
        duration={500}
        staggerDurationBy={30}
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
              {item.caption}
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
