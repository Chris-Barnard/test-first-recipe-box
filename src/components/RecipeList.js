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
        flex : '1 20%',
        listStyleType : 'none',
        background : '#222',
        margin : 0,
        padding : 6,
        position : 'relative',
      }, 
      item : {
        width : '100%',
        position : 'relative',
        backgroundColor : 'rgba(255, 255, 255, 1)',
        marginTop : 6,
        marginBottom : 6,
        borderRadius : 6,
        boxShadow : '3 3 3 rgba(0, 0, 0, 0.2)',
        highlighted : {  
          opacity : '0.75',
        },
        selected : {
          opacity : '0.5',
          // boxShadow : '10 10 5 rgba(0, 0, 0, 0.5)'
        },
      },
      link : {
        // display : 'block',
        // height : 200
      },
      image : {
        verticalAlign : 'middle',
        margin : 0,
        padding : 0,
        width : '100%',
        height : '100%',
        objectFit : 'cover',
      },
      label : {
        position : 'absolute',
        top : 60,
        left : 0,
        width : '100%',
        margin : 0,
        color : 'rgba(255, 255, 255, 0.8)',
        highlighted : {
          // color : 'rgba(255, 255, 255, 0.6)'
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
            onClick={(e) => {
              e.preventDefault()
              return select(recipe.id, recipe.mainImage, recipe.mainCaption)
            }}
            onMouseOver={() => toggleHighlight(recipe.id)}
            onMouseOut={() => toggleHighlight(recipe.id)}
          >
            <a href="#" style={styles.link} >
              <img style={styles.image} src={recipe.mainImage ? recipe.mainImage : null} />
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