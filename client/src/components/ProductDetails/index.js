import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function ProductDetails() {
  const sizes = [
    {
      _id: 1,
      name: "Small",
      price: 15.99,
    },
    {
      _id: 2,
      name: "Large",
      price: 17.99,
    },
    {
      _id: 3,
      name: "X-Large",
      price: 19.99,
    },
  ];

  const toppings = [
    {
      _id: 1,
      name: "Pepperoni",
      price: 3.99,
    },
    {
      _id: 2,
      name: "Sausage",
      price: 3.99,
    },
    {
      _id: 3,
      name: "Olives",
      price: 2.99,
    },
    {
      _id: 4,
      name: "Jalapenos",
      price: 2.99,
    },
    {
      _id: 5,
      name: "Peppers",
      price: 2.99,
    },
  ];

  let total = 15.99;
  let toppingTotal = 0;

  const [displayPrice, setPrice] = useState(sizes[0].price);

  return (
    <div>
      <center>
        <h2>Pizza Sizes</h2>
        {sizes.map((result) => (
          <>
            <input
              type="radio"
              value={result.price}
              name="pizza-sizes"
              onChange={(e) => setPrice(e.target.value)}
            />
            <b style={{ color: "red" }}>{result.name}</b>
          </>
        ))}
      </center>

      <center>
        {toppings.map((result) => (
          <>
            <input
              type="checkbox"
              value={result.price}
              name={result.name}
              onChange={(e) => setPrice(e.target.value)}
            />
            <b style={{ color: "red" }}>{result.name}</b>
          </>
        ))}
      </center>
      <center>
        <button>{displayPrice}</button>
      </center>
    </div>
  );
  // return (
  //     <div>
  //         <h2>Product Details:</h2>
  //         <h5>Neopolitan Cheese Pizza</h5>
  //         <p>Select a size</p>
  //         {sizes.map((size) => (
  //             <button
  //                 key={size._id}
  //                 onClick={() => {
  //                     // handleClick(size._id);
  //                 }}
  //             >
  //                 {size.name}:
  //                 {size.price}
  //             </button>
  //         ))}
  //         <p>Select many toppings</p>
  //         {toppings.map((topping) => (
  //             <button
  //                 key={topping._id}
  //                 onClick={() => {
  //                     // handleClick(size._id);
  //                 }}
  //             >
  //                 {topping.name}:
  //                 {topping.price}
  //             </button>
  //         ))}
  //         <p>Check out</p>
  //         <button>{`ADD TO ORDER ${total}`}</button>
  //     </div>
  // )

  // <Form>
  //         <h2>Product Details:</h2>
  //         <h5>Neopolitan Cheese Pizza</h5>
  //         <p>Select a size</p>
  //         {sizes.map((size) => (
  //             <div key={`${size}`} className="mb-3">
  //             <Form.Check // prettier-ignore
  //                 name="group1"
  //                 type={'radio'}
  //                 id={`${size._id}`}
  //                 label={`${size.name}`}
  //             />
  //             </div>
  //         ))}
  //         <p>Check out</p>
  //         <Button>{`ADD TO ORDER ${total}`}</Button>
  //     </Form>
}

export default ProductDetails;
