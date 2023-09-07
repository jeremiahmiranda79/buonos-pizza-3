import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/index";
import logo from '../../assets/bunos-background-transparent.png'

function ProductItem(item) {
  const {
    name,
    _id,
    price,
    quantity
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          width={200}
          height={200}
          alt={name}
          src={logo}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default ProductItem;