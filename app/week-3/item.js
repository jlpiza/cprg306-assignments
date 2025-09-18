// item.js
import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-500 text-white p-4 mb-3 rounded-md shadow-md">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

export default Item;
