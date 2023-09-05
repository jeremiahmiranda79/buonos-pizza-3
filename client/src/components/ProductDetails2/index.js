import React, { useState, useEffect } from "react";
import { toppings, sizes } from "../../utils/toppings";
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
   UPDATE_PIZZAS,
} from '../../utils/actions';
import { QUERY_PIZZAS } from '../../utils/queries';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function ProductDetails() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentPizza, setCurrentPizza] = useState({});
  const { loading, data } = useQuery(QUERY_PIZZAS);
  const { pizzas } = state;

  useEffect(() => {
    // already in global store
    if (pizzas.length) {
      setCurrentPizza(pizzas.find((pizza) => pizza._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PIZZAS,
        pizzas: data.pizzas,
      });
    }
  }, [pizzas, data, loading, dispatch, id]);

  /////////////////////////////////////

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [addonPrice, setAddonPrice] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTotal((basePrice + addonPrice) * count);
  }, [basePrice, addonPrice]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalToppingPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
    );

    setAddonPrice(totalToppingPrice);
  };

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1);
  };

  const addToCart = () => {};

  const removeFromCart = () => {};

  return (
    <>
      {currentPizza ? (
        <div className="product">        
          <center>
            <div className="container my-1">
              <Link to="/menu">← Back to Products</Link>
              <h2>{currentPizza.pizzaName}</h2>
              {/* <p>{currentPizza.pizzaDescription}</p> */}
              {/* <p>
                <strong>Price:</strong>${currentPizza.pizzaPrice}{' '}
              </p> */}
              <div className="">
              <h3>Select Toppings</h3>
              <ul className="">
                {sizes.map(({ name, price }) => (
                  <>
                    <input
                      type="radio"
                      name="pizza-sizes"
                      value={price}
                      onChange={() => {
                        setBasePrice(price);
                      }}
                    />
                    <b style={{ color: "red" }}>{name}</b>
                  </>
                ))}
              </ul>

              <ul className="">
                {toppings.map(({ name, price }, index) => {
                  return (
                    <li key={index}>
                      <div className="">
                        <div className="">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index, "topping")}
                          />
                          <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        </div>
                        <div className="">{getFormattedPrice(price)}</div>
                      </div>
                    </li>
                  );
                })}

                <li>
                  <div className="">
                    <div className="">
                      <button onClick={decrementCount}>-</button>
                      {count}
                      <button onClick={incrementCount}>+</button>   
                    </div>
                  </div>
                </li>
              </ul>

              <div>
                <p>
                  <strong>Price:</strong>{getFormattedPrice(total * count)}{' '}
                  <button onClick={addToCart}>Add to Cart</button>   
                </p>
              </div>

            </div>

            </div>
          </center>
        </div>
      ) : null}      
    </>
  );
}