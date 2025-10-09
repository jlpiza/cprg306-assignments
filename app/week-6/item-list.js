"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList() {
  const [items, setItems] = useState([
    { id: 1, name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
    { id: 2, name: "bread 🍞", quantity: 2, category: "bakery" },
    { id: 3, name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
    { id: 4, name: "bananas 🍌", quantity: 6, category: "produce" },
    { id: 5, name: "broccoli 🥦", quantity: 3, category: "produce" },
    { id: 6, name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
    { id: 7, name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
    { id: 8, name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
    { id: 9, name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
    { id: 10, name: "paper towels, 6 pack", quantity: 1, category: "household" },
    { id: 11, name: "dish soap 🍽️", quantity: 1, category: "household" },
    { id: 12, name: "hand soap 🧼", quantity: 4, category: "household" },
  ]);

  const [sortBy, setSortBy] = useState("name"); 

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems =
    sortBy === "group"
      ? Object.entries(
          items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
          }, {})
        )
          .sort(([catA], [catB]) => catA.localeCompare(catB)) 
          .map(([category, items]) => [
            category,
            items.sort((a, b) => a.name.localeCompare(b.name)),
          ])
      : [];

  return (
    <main className="p-4">

      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        <button
          className={`px-4 py-2 rounded ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("group")}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (

        groupedItems.map(([category, itemsInCategory]) => (
          <div key={category} className="mb-4">
            <h2 className="text-2xl font-bold text-white capitalize mb-2 text-center">
              {category}
              </h2>
            {itemsInCategory.map((item) => (
              <Item key={item.id} Item={item} />
            ))}
          </div>
        ))
      ) : (

        sortedItems.map((item) => <Item key={item.id} Item={item} />)
      )}
    </main>
  );
}
