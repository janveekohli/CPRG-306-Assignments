"use client";

import { useState } from "react";



import NewItem3 from "@/app/week-8/new-item";

//import NewItem3 from "./new-item";
import ItemList from "../../week-8/item-list";


import itemsData from "./items.json";


import MealIdea from "@/app/week-8/meal-ideas";
//import MealIdea from "./meal-ideas";


import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

    

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState("");
    // const [selectedItemName, setSelectedItemName] = useState(items);

    // const handleItemSelect = (selectedItemName)  => {
    //     setSelectedItemName()
    // };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '') // Remove emojis
        .replace(/,.*$/, '') // Remove anything after a comma
        .trim(); // Remove leading/trailing whitespace

    setSelectedItemName(cleanedName);
    };
    

    const handleAddItem = (newItem)  => {
        setItems([...items, newItem]);
    };


    const {user} = useUserAuth();

    if(!user) {
        return(
            <main>
                <h1>Week 9 Demo</h1>
                <p> You must be logged in to view this page2</p>
            </main>
        );
    }

    return (
        <main className="flex">
            <div className="flex">
                <NewItem3 
                onAddItem = {handleAddItem}>
                </NewItem3>


                <ItemList 
                items = {items}
                onItemSelect = {handleItemSelect}>
                </ItemList>

            </div>

            <div>
                <MealIdea 
                 ingredient={selectedItemName} 
                />
            </div>
        </main>
    )
}