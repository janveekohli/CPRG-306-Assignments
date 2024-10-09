// "use client"
// import { useState } from "react";

import NewItem from "./new-item";
export default function page(){
    // const  [quantity, setQuantity] = useState(1);
    // let increment = () => setQuantity(quantity + 1);
    // let decrement = () => setQuantity(quantity - 1);
    return(
        <main className = "bg-black h-screen">
    
            <NewItem/>
            
        </main>
    )
}