import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storageConfig";
import { Meal } from "@/@types/meal";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: Meal[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
