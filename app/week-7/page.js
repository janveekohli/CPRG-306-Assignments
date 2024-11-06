"use client";

import { useState } from "react";
import NewItem3 from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";


export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem)  => {
        setItems([...items, newItem]);
    };

    return (
        <main>
            <NewItem3 onAddItem = {handleAddItem}></NewItem3>


            <ItemList items = {items}></ItemList>
        </main>
    )
}