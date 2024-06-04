import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEALS_COLLECTION } from "../storageConfig";
import { Meal } from "@/@types/meal";

interface UpdateMealProps {
  mealId: string;
  updatedMeal: Meal;
}

export async function mealUpdate({ mealId, updatedMeal }: UpdateMealProps) {
  try {
    const storedMeals = await mealGetAll();

    const updatedMeals = storedMeals.map((meal) => {
      if (meal.id === mealId) {
        return { ...meal, ...updatedMeal };
      }
      return meal;
    });

    const storage = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
