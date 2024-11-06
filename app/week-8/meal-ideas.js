
"use client"
import {
    useState,
    useEffect,
} from "react";


const fetchMealIdeas = async(ingredient)  => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    const data = await response.json();

    return data.meals || []  ;

    // return data.meals || []  ; good practise as it does not show error if anything is not found
    // const dish = Object.keys(data.message);
    // return dish;
}

export default function MealIdea({ingredient}){

    let [meals, setMeals] = useState([]);


    const loadMealIdeas = async () => {

        //main issue
        if (ingredient) 
        { 
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData) 
        } else {
            setMeals([]);
        }
    }

    
    useEffect(()=> {
        loadMealIdeas();
    } ,[ingredient]);


    return(
        <div>
            {meals.map((meal)=> 
             <ul>
                <li 
                 className="text-blue-400
                 font-medium"
                 key={meal.idMeal}> 
                    {meal.strMeal}
                </li>
             </ul>)}
        </div>
    )
}