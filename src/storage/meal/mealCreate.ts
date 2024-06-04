import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEALS_COLLECTION } from "../storageConfig";
import { Meal } from "@/@types/meal";

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();

    const storage = JSON.stringify([newMeal, ...storedMeals]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
