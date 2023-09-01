import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PIZZAS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PIZZAS } from "../../utils/queries";
// import { idbPromise } from '../../utils/index';
import logo from '../../assets/bunos-background-transparent.png'

function ProductList() {
  const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PIZZAS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PIZZAS,
        pizzas: data.pizzas
      });
      // data.pizzas.forEach((pizza) => {
      //   idbPromise('pizzas', 'put', pizza);
      // });
    }
    else {
      console.log('ERROR LINE 20!!!')
    }
  }, [data, loading, dispatch]);

  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.pizzas;
  //   }

  //   return state.products.filter(
  //     (pizza) => pizza.category._id === currentCategory
  //   );
  // }


  console.log('DATA: ' + data)
  return (
      <div className="my-2">
        <h2>Our Products:</h2>
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
        {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
      </div>
  );
}

// function ProductList() {
//   // const [state, dispatch] = useStoreContext();
//   // const { currentCategory } = state;

//   return (
//       <div className="my-2">
//         <h2>Our Products:</h2>
//         {ProductItem.length ? (
//           <div>
//             {ProductItem.map((product) => (
//               <ProductItem
//                 key={product._id}
//                 _id={product._id}
//                 image={product.image}
//                 name={product.name}
//                 price={product.price}
//                 quantity={product.quantity}
//               />
//             ))}
//           </div>
//     ) : (
//       <h3>You haven't added any products yet!</h3>
//     )}
//     {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
//       </div>
//   );
// }

export default ProductList;