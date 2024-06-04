import { Meal } from "@/@types/meal";
import { mealGetAll } from "./mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storageConfig";

interface mealDeleteProps {
  mealId: string;
}

export async function mealDelete({ mealId }: mealDeleteProps) {
  try {
    const storedMeals = await mealGetAll();

    const meals = storedMeals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
