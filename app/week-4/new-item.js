"use client"
import { useState } from "react";

export default function NewItem(){
    const  [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);
    return(
        <main className=" flex justify-center  "> 
            {/* <h1>Cart</h1> */}
            {/* <p> Items : {quantity} </p>

            <button disabled={quantity >= 20} onClick={increment} className=" w-25 h-10 m-5  bg-slate-500 my-5 active:bg-red-500 rounded-md hover:font-bold"> Increment</button>
            <button disabled={quantity <= 1} onClick={decrement} className=" w-25 h-10 m-5  bg-slate-500 my-5 active:bg-red-500 rounded-md hover:font-bold"> Decrement</button> */}

            <div className="  bg-black m-5 flex items-center  ">
            <p className= " self-center mr-8 ml-2 ">  {quantity} </p>
            <button disabled={quantity >= 20} onClick={increment} className=" w-10 h-10 bg-green-300 m-2 "> + </button>

            <button disabled={quantity <= 1} onClick={decrement} className="bg-red-400  w-10 h-10  m-2"> - </button>

            {/* {quantity > 1 && <p> { <button onClick={decrement} className=" w-25 h-10 m-5  bg-slate-500 my-5 active:bg-red-500 rounded-md hover:font-bold"> Decrement</button>} </p>} */}
            </div>

        </main>
    )
}