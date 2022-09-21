import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Auxilary from '../../hoc/Auxilary'

export default class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  state = {
    ingredients: { 
      salad : 1,
      bacon: 1,
      cheese: 2,
      meat: 2 
    }
  }
  render() {
    return (
            <Auxilary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Auxilary>
        )
  }
}
