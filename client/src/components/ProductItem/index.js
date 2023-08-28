import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import { pluralize } from "../../utils/index";
import logo from '../../assets/bunos-background-transparent.png'

function ProductItem(item) {

    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    return (
        <div className="card px-1 py-1">
            <BrowserRouter>
                <Link to={`/products/${_id}`}>
                    <img
                        width={200}
                        height={200}
                        alt={name}
                        //src={`/images/${image}`}
                        src={logo}
                    />
                    <p>{name}</p>
                </Link>
            </BrowserRouter>
        <div>
            <div>{quantity} {pluralize("item", quantity)} in stock</div>
            <span>${price}</span>
            </div>
            {/* <button onClick={addToCart}>Add to cart</button> */}
        </div>
    );
}

export default ProductItem;