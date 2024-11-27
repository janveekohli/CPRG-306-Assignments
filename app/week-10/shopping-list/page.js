"use client";

import { useState, useEffect } from "react";
import NewItem3 from "./new-item";
import ItemList from "./item-list";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load items from Firestore when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const userId = "exampleUserId"; // Replace with actual user ID from auth
                const fetchedItems = await getItems(userId);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    // Handle adding a new item to Firestore and update the local state
    const handleAddItem = async (newItem) => {
        try {
            const userId = "exampleUserId"; // Replace with actual user ID from auth
            const id = await addItem(userId, newItem); // Add to Firestore
            setItems([...items, { id, ...newItem }]); // Update local state
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <main>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Component for adding a new item */}
                    <NewItem3 onAddItem={handleAddItem} />

                    {/* Component for displaying the list of items */}
                    <ItemList items={items} />
                </>
            )}
        </main>
    );
}
