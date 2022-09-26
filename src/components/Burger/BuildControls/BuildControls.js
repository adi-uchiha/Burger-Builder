import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'



function BuildControls(props) {
    const controls = [
        {label: "Salad", type:"salad"},
        {label: "Bacon", type:"bacon"},
        {label: "Cheese", type:"cheese"},
        {label: "Meat", type:"meat"}
    ];


  return (
    <div className={classes.BuildControls} >
      <p>  Current Prize : <strong>{props.prize.toFixed(2)}</strong>  </p>
        {controls.map((ele)=> (
            <BuildControl 
            key={ele.label} 
            label={ele.label} 
            added={()=>props.ingredientAdd(ele.type)}
            remove={()=>props.ingredientRemove(ele.type)}
            disabled={props.disabled[ele.type]}
            />
        ))}
        <button  className={classes.OrderButton}
        onClick={props.order}
        disabled = {!props.purchasable}>
            ORDER NOW  
        </button>
    </div>
  )
}

export default BuildControls