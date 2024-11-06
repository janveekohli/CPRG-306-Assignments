



"use client";
import NewItem from "../week-4/new-item";
import { useState } from "react";



export default function NewItem3( {onAddItem} ){
    const [name, setName] = useState(""); 
    const [category, setCategory] = useState("produce");
    let [quantity, setQuantity] = useState(0);


    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);


    function submissionHandler(event){
        event.preventDefault();

        const newId = Math.floor(Math.random() * 100000);

        //creating an object and giving properties
        const newItem = {id : newId, name , quantity, category}
        //console.log(newItem);
        onAddItem(newItem);

        setName("");
        setCategory("");
        setQuantity(0);
       
        // alert(" Name: " + name + 
        //     " Category: " + category +
        //     " Quantity: " + quantity);

        // testing the function 
        //console.log("Hello");
    }

     

    return(
     <div className= "flex justify-center ">
       <form className=" m-3 p-3 w-290 bg-slate-900">

            {/* Input Field for name */}
            <input 
             type="text" 
             onChange= {(e) => setName(e.target.value)}  
             value={name}
             placeholder="Item name"
             className="border-solid border-2 border-neutral-50-600 w-full rounded-md">
            </input>
            
            {/* Testing the name of the item */}
            {/* <p className="border-solid border-2 border-black mt-3 h-8">{name}</p> */}

            <div className="flex items-center">
                    {/* quantity */}
                    
                    <div className="  bg-white mt-4 flex justify-items-start  rounded-md ">
                        <p className= " self-center mr-8 ml-2 "> {quantity} </p>
                        <button type="button" disabled={quantity >= 20} onClick={increment} className="  rounded-md w-10 h-10 bg-slate-300 m-2 "> + </button>

                        <button type="button" disabled={quantity <= 1} onClick={decrement} className="bg-sky-400  rounded-md w-10 h-10  m-2"> - </button>
                    </div>
                    

                    {/* Category Field  */}

                    <select  id="item" 
                     onChange = {(e) =>  setCategory(e.target.value)}
                     className=" rounded-md h-10 flex justify-items-end ml-3 " >
                        <option value = "Produce"> Produce </option>
                        <option value = "Dairy">Dairy</option>
                        <option value = "Bakery">Bakery</option>
                        <option value = "Meat">Meat</option>
                        <option value = "Vegetables"> Vegetables</option>
                        <option value = "Frozen Foods">Frozen Foods</option>
                        <option value = "Canned Foods">Canned Foods</option>
                        <option value = "Dry Goods">Dry Goods</option>
                        <option value = "Beverages"> Beverages</option>
                        <option value = "Snacks"> Snacks</option>
                        <option value = "Household"> Household</option>
                        <option value = "others"> others</option>
                    
                    </select>
            </div>

            {/* Testing :  printing the value of category */}
            {/* <p> This category is + {category}</p> */}

            {/* Submit button */}
            <button type="Submit"
            onClick={submissionHandler} 
            className="bg-blue-600 rounded-md  h-10  mt-2 w-full"> +  </button>
        </form>
     </div>
    );
}