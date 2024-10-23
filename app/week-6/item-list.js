"use client";

import Item from "./item";
import itemJson from "./item.json";
import {useState} from "react";

export default function ItemList(){

    let items = [...itemJson];

     let [sortBy, setSortBy] = useState("name");

    
        if(sortBy === "name"){
            items.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortBy === "category"){
            items.sort((a,b) => a.category.localeCompare(b.category));
        } 
    

    return(
        <main>
           <div className="flex m-3 ">
                <p className="text-2xl text-white "> Sort by: </p>

                <button onClick = {() => setSortBy("name")} 
                 className={`rounded-md w-30 h-10 p-3 m-2  
                 ${sortBy== "name" ? "bg-orange-600  text-2xl p-2 h-20 w-25" : "bg-orange-600"}`}> Name 
                    
                </button>

                <button 
                    onClick = {() => setSortBy("category") }
                    className= {`rounded-md w-30 h-10 p-3 m-2 
                    ${sortBy== "category" ? "bg-orange-600 text-2xl p-2 h-20 w-35" : "bg-orange-400"}`}> Category
                </button>

                <button 
                    onClick = {() => setSortBy("category") }
                    className= {`rounded-md w-30 h-10 p-3 m-2 
                    ${sortBy== "groupCategory" ? "bg-orange-600 text-2xl p-2 h-20 w-35" : "bg-orange-400"}`}> Grouped category
                </button>

                {/* Testing Sortby value */}
                {/* <p className="text-red-900 text-2xl">{sortBy}</p> */}

           </div>

            <ul>
                {items.map((i) => (

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