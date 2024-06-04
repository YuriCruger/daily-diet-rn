import { Statistics } from "@/screens/Statistics";
import { Home } from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMeal } from "@/screens/NewMeal";
import { Feedback } from "@/screens/Feedback";
import { Meal } from "@/screens/Meal";
import { EditMeal } from "@/screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal" component={Meal} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
