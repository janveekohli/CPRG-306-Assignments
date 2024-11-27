import { db } from '../_utils/firebase'; // Firebase configuration
import { collection, getDocs, addDoc } from 'firebase/firestore';

// Fetch items from Firestore
export async function getItems(userId) {
    try {
        console.log("Fetching items for userId:", userId); // Debug log
        const querySnapshot = await getDocs(collection(db, 'users', userId, 'items'));

        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        console.log("Fetched items:", data); // Debug log
        return data;
    } catch (error) {
        console.error("Error fetching items from Firestore:", error); // Debug log
        throw error;
    }
}

// Add a new item to Firestore
export async function addItem(userId, itemToAdd) {
    try {
        console.log("Adding item for userId:", userId, "with data:", itemToAdd); // Debug log
        const docRef = await addDoc(
            collection(db, 'users', userId, 'items'),
            itemToAdd
        );

        console.log("Item added with ID:", docRef.id); // Debug log
        return docRef.id;
    } catch (error) {
        console.error("Error adding item to Firestore:", error); // Debug log
        throw error;
    }
}
