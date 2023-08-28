import React from "react";

function CategoryMenu() {
    const categories = ['Pizza', 'Calzone', 'Stromboli'];

    // const handleClick = (id) => {
    //     dispatch({
    //       type: UPDATE_CURRENT_CATEGORY,
    //       currentCategory: id,
    //     });
    //   };

    return (
        <div>
          <h2>Choose a Category:</h2>
          {categories.map((item) => (
            <button
              key={item._id}
              onClick={() => {
                // handleClick(item._id);
              }}
            >
              {/* {item.name} */}
              {item}
            </button>
          ))}
        </div>
      );
}

export default CategoryMenu;