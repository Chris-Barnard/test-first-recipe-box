import React, { Component } from 'react';
import FlipMove from 'react-flip-move'

export class RecipeTitle extends Component {
  render() {

    const styles = {
      container : {
        flex : '1 30%',
        background : '#AAA',
        margin : 0,
        paddingTop : 0,
        paddingLeft : 0,
        border : 0,
      },
      card : {
        backgroundColor : 'white',
        padding : 6,
        margin : 10,
        borderRadius : 6,
      },
      header : {
        display : 'flex',
        width : '100%',
        title : {
          flex : 1,
        }
      },
      body : {
        display : 'flex',
        width : '100%',
        timeEstimate : {
          flex : 1,
          text : {
            margin : 3,
          }
        },
        ingredients : {
          flex : 1,

        },
      }
    }

    const { activeRecipe } = this.props
    // const customEnterAnimation = {
    //   from: { transform: 'scale(0.5, 1)' },
    //   to:   { transform: 'scale(1, 1)' }
    // }
    return (
      <FlipMove
        easing="ease-in-out"
        enterAnimation="accordianVertical"
        leaveAnimation="accordianVertical"
        duration={500}
        staggerDurationBy={30}
        staggerDelayBy={18}
        className="recipeTitle"
        style={styles.container}
      >
        <div key='titleCard' style={styles.card} >
          <div style={styles.header}>
            <h2 style={styles.header.title} >{activeRecipe.name}</h2>
          </div>
          <div style={styles.body}>
            <div style={styles.body.timeEstimate}>
              <h5 style={styles.body.timeEstimate.text} >Prep Time : 45 minutes</h5>
              <h5 style={styles.body.timeEstimate.text} >Cook Time : 12 minutes</h5>
            </div>
            <div style={styles.body.ingredients}>

            </div>
          </div>
        </div>
      </FlipMove>
    );
  }
}

export default RecipeTitle