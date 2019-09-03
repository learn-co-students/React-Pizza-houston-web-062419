import React from "react"

const PizzaForm = (props) => {

  // let pizzaObj = {}
  // if (props.pizza === undefined) {
  //   pizzaObj = {
  //     id: "",
  //     topping: "",
  //     size: "",
  //     vegetarian: ""
  //   }
  // } else {
  //   pizzaObj = {
  //     id: props.pizza.id,
  //     topping: props.pizza.topping,
  //     size: props.pizza.size,
  //     vegetarian: props.pizza.vegetarian
  //   }
  // }

  let checkveg = props.pizza.vegetarian === true ? true : false
  let checknonveg = props.pizza.vegetarian === false ? true : false
  console.log(props)

  return (
    <div>
      <form  onSubmit={(e) => props.submit(e)} >
        <div className="form-row">

        <div className="col-5">
          <input type="text" className="form-control" placeholder="Pizza Topping" defaultValue={props.pizza.topping} />
       
        </div>
        <div className="col">
          <select value={props.pizza.size} className="form-control" onChange={(e) => props.changeSize(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="pizzaType" value="Vegetarian" checked={checkveg} onChange={props.changeVeg} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="pizzaType" value="Not Vegetarian" checked={checknonveg} onChange={props.changeVeg} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <input type="submit" className="btn btn-success" />
        </div>
      </div>  
    </form>
  </div>
  )
}

export default PizzaForm
