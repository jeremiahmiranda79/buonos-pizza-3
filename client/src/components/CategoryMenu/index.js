import React from "react";

function CategoryMenu() {
    const categories = ['Pizza', 'Calzone', 'Stromboli'];

    return (
        <div>
          <h2>Choose a Category:</h2>
          {categories.map((item) => (
            <button
              key={item._id}
              onClick={() => {
              }}
            >
              {item}
            </button>
          ))}
        </div>
      );
}

export default CategoryMenu;