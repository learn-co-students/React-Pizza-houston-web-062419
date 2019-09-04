import React from "react"

class PizzaForm extends React.Component {

constructor(props){
  super(props)
  this.state = {
    id:0,
    topping:"",
    size: "",
    vegetarian: true
  }

}



render(){

  if(this.props.pizza.id != this.state.id /*&& this.state.topping == ""*/) {
    this.setState({id:this.props.pizza.id, 
              topping: this.props.pizza.topping,
                 size: this.props.pizza.size,
           vegetarian:this.props.pizza.vegetarian}, ()=>console.log("in if " + this.state.topping))

  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input  name="topping" type="text" className="form-control" placeholder="Pizza Topping" defaultValue={
                /*this.props.pizza.topping*/ this.state.topping
              }  value={this.state.topping} onChange={e=>this.setState({topping:e.target.value})}/>
        </div>
        <div className="col">
          <select defaultValue={this.props.pizza.size} value={this.state.size} onChange={e=>this.setState({size:e.target.value})} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name="veg" className="form-check-input" type="radio" value="Vegetarian" 
                    checked={this.state.vegetarian? true: false}
                    defaultChecked={this.props.pizza.vegetarian?true:false} onChange={e=>this.setState({vegetarian:true})}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name="veg" className="form-check-input" type="radio" value="Not Vegetarian" 
                    checked={this.state.vegetarian? false: true}
                    defaultChecked={this.props.pizza.vegetarian?false:true} onChange={e=>this.setState({vegetarian:false})}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={e =>this.props.handleSubmit(e, this.state)}>Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm
