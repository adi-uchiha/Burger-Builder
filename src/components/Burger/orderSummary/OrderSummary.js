import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Prize: {props.prize.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxilary>
  )
}

export default OrderSummary