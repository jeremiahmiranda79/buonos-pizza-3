import React, { useState, useEffect } from "react";
import { toppings, sizes } from "../../utils/toppings";
import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import Cart from '../Cart';

// import { useStoreContext } from '../../utils/GlobalState';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   ADD_TO_CART,
//   UPDATE_PRODUCTS,
// } from '../utils/actions';
// import { QUERY_PRODUCTS } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';
// import spinner from '../assets/spinner.gif';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function ProductDetails() {
  // const [state, dispatch] = useStoreContext();
  // const { id } = useParams();

  // const [currentProduct, setCurrentProduct] = useState({});

  // const { loading, data } = useQuery(QUERY_PRODUCTS);
  // const { products, cart } = state;

  // useEffect(() => {
  //   // already in global store
  //   if (products.length) {
  //     setCurrentProduct(products.find((product) => product._id === id));
  //   }
  //   // retrieved from server
  //   else if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });

  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //   }
  //   // get cache from idb
  //   else if (!loading) {
  //     idbPromise('products', 'get').then((indexedProducts) => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: indexedProducts,
  //       });
  //     });
  //   }
  // }, [products, data, loading, dispatch, id]);

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
    ); // how does this work?

    setCheckedState(updatedCheckedState);

    const totalToppingPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0 // what is this doing? 
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

  const addToCart = () => {
    // const itemInCart = cart.find((cartItem) => cartItem._id === id);
    // if (itemInCart) {
    //   dispatch({
    //     type: UPDATE_CART_QUANTITY,
    //     _id: id,
    //     purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
    //   });
    //   idbPromise('cart', 'put', {
    //     ...itemInCart,
    //     purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
    //   });
    // } else {
    //   dispatch({
    //     type: ADD_TO_CART,
    //     product: { ...currentProduct, purchaseQuantity: 1 },
    //   });
    //   idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    // }
  };

  const removeFromCart = () => {
    // dispatch({
    //   type: REMOVE_FROM_CART,
    //   _id: currentProduct._id,
    // });

    // idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
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
            {/* <div className="">
              <div className="">Total:</div>
              <div className="">{getFormattedPrice(total * count)}</div>
            </div> */}
        </li>
      </ul>

      <div>
      <p>
            {/* <strong>Price:</strong>${currentProduct.price}{' '} */}
            <strong>Price:</strong>${getFormattedPrice(total * count)}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              // disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>
      </div>

    </div>

    
  );
}