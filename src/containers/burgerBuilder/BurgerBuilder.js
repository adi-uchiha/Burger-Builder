import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/orderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../../hoc/Auxilary'

const INGREDIENT_PRIZES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  state = {
    ingredients: { 
      salad : 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrize : 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey =>{
        return ingredients[igKey];
      })
      .reduce((sum , el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0})
    
  } 

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1;
    const updatedIngredient = {...this.state.ingredients}
    updatedIngredient[type] = updatedCount

    const prizeAddition = INGREDIENT_PRIZES[type];
    const oldPrize = this.state.totalPrize;
    const newPrize = oldPrize + prizeAddition;

    this.setState({ totalPrize: newPrize, ingredients: updatedIngredient })

    this.updatePurchaseState(updatedIngredient);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return ;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {...this.state.ingredients}
    updatedIngredient[type] = updatedCount

    const prizeDeduction = INGREDIENT_PRIZES[type];
    const oldPrize = this.state.totalPrize;
    const newPrize = oldPrize - prizeDeduction;

    this.setState({ totalPrize: newPrize, ingredients: updatedIngredient })

    this.updatePurchaseState(updatedIngredient);
  }

  purchaseHandler = () => {
    this.setState({purchasing : true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing : false})
  }
  purchaseContinueHandler = () => {
    alert('Purchase Continued')
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
            <Auxilary>
                <Modal show={this.state.purchasing}
                      modalClosed={this.purchaseCancelHandler}>
                  <OrderSummary 
                  ingredients={this.state.ingredients}
                  purchaseCancel={this.purchaseCancelHandler}
                  prize={this.state.totalPrize}
                  purchaseContinue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdd = {this.addIngredientHandler}
                    ingredientRemove = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    order = {this.purchaseHandler}
                    prize = {this.state.totalPrize}
                />
            </Auxilary>
        )
  }
}
