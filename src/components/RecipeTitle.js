import React, { Component } from 'react';
// import FlipMove from 'react-flip-move'

export class RecipeTitle extends Component {
  render() {

    const styles = {
      container : {
        // position : 'fixed',
        flex : '1 40%',
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
          fontSize : 16,
          flex : '1 35%',
          text : {
            margin : 3,
          }
        },
        ingredients : {
          flex : '1 65%',
          listStyleType : 'none',
          margin : 0,
          padding : 0,
          fontSize : 12,
          container : {
            display : 'flex',
            padding : 0,
            margin : 0,
          },
          item : {
            flex : 1,
            paddingRight : 4,
          },
          amount : {
            flex : 1,
            paddingLeft : 4,
          },
        },
      },
      footer : {
        display : 'flex',
        width : '100%',
        paddingTop : 10,
        button : {
          flex : 1,
          fontSize : 20,
          borderRadius : 4,
          color : '#fff',
          background : '#2ECC40',
          opacity : '0.8',
          padding : 10,
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
              <h6 style={styles.body.timeEstimate.text} >Prep Time : {activeRecipe.prepTime}</h6>
              <h6 style={styles.body.timeEstimate.text} >Cook Time : {activeRecipe.cookTime}</h6>
            </div>
            <ul style={styles.body.ingredients}>
              {activeRecipe.ingredients.map((ingredient, i) => {
                return (
                  <li key={i*1000} style={styles.body.ingredients.container} >
                    <div style={styles.body.ingredients.item} >
                      {ingredient.item}
                    </div>
                    <div style={styles.body.ingredients.amount} >
                      {ingredient.amount}
                    </div>
                  </li>
                )
              } )}
            </ul>
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