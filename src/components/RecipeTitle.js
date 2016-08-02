import React, { Component } from 'react';
// import FlipMove from 'react-flip-move'

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
      },
      footer : {
        display : 'flex',
        width : '100%',
        button : {
          flex : 1,
          fontSize : 20,
          borderRadius : 4,
          color : '#fff',
          background : '#2ECC40',
          opacity : '0.8',
        }
      }
    }

    const { activeRecipe, start } = this.props

    return (
      <div        
        className="recipeTitle"
        style={styles.container}
        key={activeRecipe.name}
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
          <div style={styles.footer}>
            <button onClick={start} style={styles.footer.button} >Start Recipe!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeTitle