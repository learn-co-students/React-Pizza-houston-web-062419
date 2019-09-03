import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(){
    super(),
    this.state={
      pizzas: [],
      pizza: {
        id: "",
        topping: "",
        size: "",
        vegetarian: ""
      }
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        pizzasMaster: pizzas,
        pizzas: pizzas
      })
    })
  }

  editPizza = (e) => {
    this.state.pizzas.filter(pizza => {
      if (pizza.id == e.target.id) {
        this.setState({
          pizza: pizza
        })
      }
    })
  }

  submitPizza = (e) => {
    e.preventDefault()
    let veg = ""
    if(e.target[2].checked){
      veg = true
    }else{
      veg = false
    }
    const pizzaObj = {
      id: this.state.pizza.id,
      topping: e.target[0].value,
      size: e.target[1].value,
      vegetarian: veg
    }

    // debugger
    console.log(pizzaObj)
    fetch("http://localhost:3000/pizzas/"+this.state.pizza.id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping: pizzaObj.topping,
        size: pizzaObj.size,
        vegetarian: pizzaObj.vegetarian
      })
    })
    .then(res => res.json())
    .then(pizza => {
      let pArray = this.state.pizzas.map(p => {
        if(pizza.id === p.id){
          p = pizza
        }
        return p
      })

      this.setState({
        pizzas : pArray,
        pizza
      })
     
    })
  }

  changeVeg = () => {

      this.setState({
        pizza: {
          ...this.state.pizza,
          vegetarian: !this.state.pizza.vegetarian
        }
      })
  }

  changeSize = (e) => {
    this.setState({
      pizza: {
        ...this.state.pizza,
        size: e.target.value
      }
    })
  }

  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} submit={this.submitPizza} changeVeg={this.changeVeg} changeSize={this.changeSize}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
