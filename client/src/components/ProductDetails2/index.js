import { useState, useEffect } from "react";
import { toppings, sizes } from "../../utils/toppings";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function ProductDetails2() {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  //   const [radioState, setRadioState] = useState(
  //     new Array(sizes.length).fill(false)
  //   );

  const [total, setTotal] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [toppingPrice, setToppingPrice] = useState(0);

  useEffect(() => {
    setTotal(basePrice + toppingPrice);
  }, [basePrice, toppingPrice]);

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
      0
    );

    setToppingPrice(totalToppingPrice);

    // setTotal(basePrice + toppingPrice);
  };

  return (
    <div className="App">
      <h3>Select Toppings</h3>

      <ul className="sizes-list">
        {sizes.map(({ name, price }, index) => (
          <>
            <input
              type="radio"
              name="pizza-sizes"
              value={price}
              onChange={() => {
                setBasePrice(price);
                // setTotal(basePrice + toppingPrice);
              }}
            />
            <b style={{ color: "red" }}>{name}</b>
          </>
        ))}
      </ul>

      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
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
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

// export default ProductDetails;