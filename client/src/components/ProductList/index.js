import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PIZZAS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PIZZAS } from "../../utils/queries";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_PIZZAS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PIZZAS,
        pizzas: data.pizzas
      });
    }
    else {
      console.log('ERROR LINE 20!!!')
    }
  }, [data, loading, dispatch]);

  return (
    <div className="my-2">
      <h2>Our Pizzas:</h2>
      {state.pizzas.length ? (
        <div className="flex-row">
          {state.pizzas.map((pizza) => (
          <ProductItem
            key={pizza._id}
            _id={pizza._id}
            image={pizza.image}
            name={pizza.pizzaName}
            price={pizza.pizzaPrice}
            quantity={pizza.quantity}
          />
        ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;