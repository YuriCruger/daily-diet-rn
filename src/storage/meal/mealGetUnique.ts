import { Meal } from "@/@types/meal";
import { mealGetAll } from "./mealGetAll";

interface MealGetUniqueProps {
  mealId: string;
}

export async function mealGetUnique({ mealId }: MealGetUniqueProps) {
  try {
    const storage = await mealGetAll();

    const foundMeal: Meal | undefined = storage.find(
      (meal) => meal.id === mealId
    );

    return foundMeal;
  } catch (error) {
    throw error;
  }
}
