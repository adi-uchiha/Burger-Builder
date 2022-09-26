import React from 'react'
import Auxilary from '../../../hoc/Auxilary'

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(key =>{
        return (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}
                 >{key}</span> : {props.ingredients[key]}
            </li>
        );
    })
  return (
        <Auxilary>
            <h3>Your Order</h3>
            <p>Ingredients Added: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxilary>
  )
}

export default OrderSummary