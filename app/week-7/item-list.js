"use client";

import { useState } from "react";

import Item from "./item";
//import itemJson from "./item.json";


export default function ItemList( {items} ){

    const [sortBy, setSortBy] = useState("name");
   //let items = [...itemJson];

   const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
        return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
    } else if (sortBy === "groupedCategory") {
        // Grouped category logic (categorize items by category, then sort within each category)
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    }
    return 0;
 });

    

    return(
        <main>
           <div className="flex m-1 mt-3 ">
                <p className="text-2xl text-white "> SORT BY: </p>

                <button onClick = {() => setSortBy("name")} 
                 className={`rounded-md w-30 h-10 p-3 m-2  
                 ${sortBy== "name" ? "bg-orange-600  text-2xl p-2 h-20 w-35" : "bg-orange-400"}`}>
                     name
                </button>

                <button 
                    onClick = {() => setSortBy("category") }
                    className= {`rounded-md w-30 h-10 p-3 m-2 
                    ${sortBy== "category" ? "bg-orange-600 text-2xl p-2 h-20 w-35" : "bg-orange-400"}`}> category
                </button>

                <button 
                    onClick = {() => setSortBy("") }
                    className= {`rounded-md w-30 h-10 p-3 m-2 
                    ${sortBy== "groupCategory" ? "bg-orange-600 text-2xl p-2 h-20 w-35" : "bg-orange-400"}`}> Grouped category
                </button>

                {/* Testing Sortby value */}
                {/* <p className="text-red-900 text-2xl">{sortBy}</p> */}

           </div>

            <ul>
                {sortedItems.map((i) => (

                    <li key={i.id}>
                        {/* <h2 className = "text-lg font-semibold">{i.name}</h2> */}
                          <Item name={i.name} quantity={i.quantity} category={i.category}/>
                            {/* <p className="text-sm">{i.quantity}</p>   
                            <p className="text-sm">{i.category}</p>   */}
                    </li>
                ))}
            </ul>

        </main>
    );
}