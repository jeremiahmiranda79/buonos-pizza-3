import React from "react";
import ProductItem from '../ProductItem';
import logo from '../../assets/bunos-background-transparent.png'
import { QUERY_PIZZAS } from "../../utils/queries";
import {useQuery} from '@apollo/client';

const products = [
  {
      "_id": "1",
      "name": "Neopolitan Cheese Pizza",
      "price": 19.49,
      "quantity": 50
  },
  {
      "_id": "2",
      "name": "Large Calzone",
      "price": 13.99,
      "quantity": 150
  },
  {
      "_id": "3",
      "name": "Stromboli",
      "price": 13.99,
      "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
      "_id": "2",
      "name": "Large Calzone",
      "price": 13.99,
      "quantity": 150
  },
  {
      "_id": "3",
      "name": "Stromboli",
      "price": 13.99,
      "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
      "_id": "2",
      "name": "Large Calzone",
      "price": 13.99,
      "quantity": 150
  },
  {
      "_id": "3",
      "name": "Stromboli",
      "price": 13.99,
      "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
    "_id": "2",
    "name": "Large Calzone",
    "price": 13.99,
    "quantity": 150
  },
  {
    "_id": "3",
    "name": "Stromboli",
    "price": 13.99,
    "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
    "_id": "2",
    "name": "Large Calzone",
    "price": 13.99,
    "quantity": 150
  },
  {
    "_id": "3",
    "name": "Stromboli",
    "price": 13.99,
    "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
    "_id": "2",
    "name": "Large Calzone",
    "price": 13.99,
    "quantity": 150
  },
  {
    "_id": "3",
    "name": "Stromboli",
    "price": 13.99,
    "quantity": 75
  },

  {
    "_id": "1",
    "name": "Neopolitan Cheese Pizza",
    "price": 19.49,
    "quantity": 50
  },
  {
    "_id": "2",
    "name": "Large Calzone",
    "price": 13.99,
    "quantity": 150
  },
  {
    "_id": "3",
    "name": "Stromboli",
    "price": 13.99,
    "quantity": 75
  },
];

function ProductList() {
  const { loading, data } = useQuery(QUERY_PIZZAS);
  const pizzas = data?.pizzas || [];

    return (
        <div className="my-2">
          <h2>Our Products:</h2>
          {/* {state.products.length ? ( */}
          {products.length ? (
            <div className="flex-row">
              {/* {filterProducts().map((product) => ( */}
              {pizzas.map((pizza) => (
                <ProductItem
                    key={pizza._id}
                    _id={pizza._id}
                    //image={product.image}
                    image={logo}
                    name={pizza.name}
                    price={pizza.price}
                    quantity={pizza.quantity}
                />
              ))}
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
          {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
        </div>
    );
}

export default ProductList;