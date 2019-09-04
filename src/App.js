import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
	constructor(){
		super()
		this.state = {
			pizzas:[],
			edit_pizza:{"id": 0,
					    "topping": "",
					    "size": "",
					    "vegetarian": true
					}
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/pizzas")
		.then(res => res.json())
		.then(res => this.setState({pizzas: res}))
	}

	handleEdit = (pizza) =>{
		this.setState({edit_pizza: pizza}, ()=>console.log(this.state.edit_pizza))
	} 

	handleSubmit = (e, t)=>{
		e.preventDefault()
		console.log(e.target.children)
		console.log(t)

		let configObj = {
                method: "PATCH",
                headers: {
                 "Content-Type": "application/json",
                  "Accept": "application/json"
                  },
                 body: JSON.stringify(t)
        };

		fetch("http://localhost:3000/pizzas/"+t.id, configObj)

		let empty_pizza = {"id": 0,
					    "topping": "",
					    "size": "",
					    "vegetarian": true}
		this.setState({edit_pizza:empty_pizza})
	}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.edit_pizza} handleSubmit = {this.handleSubmit}/>
        <PizzaList pizzas = {this.state.pizzas} handleEdit = {this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
