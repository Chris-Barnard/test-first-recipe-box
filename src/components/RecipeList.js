import React, { Component } from 'react';
// import { m } from '../../tools/styleMasher'

function m() {
  let res = {}
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      Object.assign(res, arguments[i])
    }
  }
  return res
}

export class RecipeList extends Component {
  render() {

    const { list, select, toggleHighlight } = this.props

    const styles = {
      container : {
        flex : '1 30%',
        listStyleType : 'none',
        margin : 0,
        padding : 0,
      }, 
      item : {
        width : '100%',
        position : 'relative',
        background : 'rgba(0, 0, 0, 0.5)',
        highlighted : {
          color : 'rgba(255, 255, 255, 0.2)',
          background : 'rgba(0, 0, 0, 0.7)'
        },
        selected : {
          background : 'rgba(0, 0, 0, 0.9)',
          boxShadow : '10 10 5 rgba(0, 0, 0, 0.5)'
        },
      },
      link : {
        // display : 'block',
        width : 240
      },
      label : {
        position : 'absolute',
        top : 40,
        left : 0,
        width : '100%',
        margin : 0,
        color : 'rgba(255, 255, 255, 0.8)',
        highlighted : {
          color : 'rgba(255, 255, 255, 0.4)'
        }
      },
    }

    return (
      <ul className="recipeList" style={styles.container} >
        {list.map((recipe, i) =>
          <li className="recipeItem" style={m(
            styles.item,
            recipe.isHighlighted && styles.item.highlighted,
            recipe.isSelected && styles.item.selected
          )} key={i} 
            onClick={() => select(recipe.id, recipe.mainImage)}
            onMouseOver={() => toggleHighlight(recipe.id)}
            onMouseOut={() => toggleHighlight(recipe.id)}
          >
            <a href="#" style={styles.link} >
              <img src={recipe.mainImage ? recipe.mainImage : null}
                width={200}
              />
              <h2 style={m(
                styles.label,
                recipe.isHighlighted && styles.label.highlighted
              )} >{recipe.name}</h2>
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default RecipeList