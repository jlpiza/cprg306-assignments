import React from "react";
import ItemList from "./item-list";


export default function Page() {


    return (
        <main className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Shopping List</h1>
            <ItemList />
            </main>
            );
            }



