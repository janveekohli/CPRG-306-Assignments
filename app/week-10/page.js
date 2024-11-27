"use client";

import { useState, useEffect } from "react";
import NewItem from "./shopping-list/new-item"; // Import your NewItem component
import ItemList from "./shopping-list/item-list"; // Import your ItemList component
import { getItems, addItem } from "./_services/shopping-list-service"; // Firestore service functions

export default function Page() {
    const [items, setItems] = useState([]); // State to hold items
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch items from Firestore when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const userId = "exampleUserId"; // Replace with authenticated user's ID
                const fetchedItems = await getItems(userId); // Fetch items from Firestore
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    // Add a new item to Firestore and update local state
    const handleAddItem = async (newItem) => {
        try {
            const userId = "exampleUserId"; // Replace with authenticated user's ID
            const id = await addItem(userId, newItem); // Add the item to Firestore
            setItems((prevItems) => [...prevItems, { id, ...newItem }]); // Update state with new item
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-6">Shopping List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Render NewItem component for adding new items */}
                    <NewItem onAddItem={handleAddItem} />
                    
                    {/* Render ItemList to display the list of items */}
                    <ItemList items={items} />
                </>
            )}
        </main>
    );
}
