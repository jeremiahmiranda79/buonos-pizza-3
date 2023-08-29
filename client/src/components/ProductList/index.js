import React from "react";
import ProductItem from '../ProductItem';
import logo from '../../assets/bunos-background-transparent.png'

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
    return (
        <div className="my-2">
          <h2>Our Products:</h2>
          {/* {state.products.length ? ( */}
          {products.length ? (
            <div className="flex-row">
              {/* {filterProducts().map((product) => ( */}
              {products.map((product) => (
                <ProductItem
                    key={product._id}
                    _id={product._id}
                    //image={product.image}
                    image={logo}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
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