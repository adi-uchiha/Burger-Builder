import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i)=> {
      return <BurgerIngredients key = {igKey+i} type = {igKey} /> 
    } );
  }).reduce((prev, next) => {
    return prev.concat(next)
  }, [] );

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>
  }

  return (
    <div className={classes.Burger} >
      <BurgerIngredients type='bread-top'/>
      {transformedIngredients }
      <BurgerIngredients type='bread-bottom'/>
    </div>
  )
}

export default Burger