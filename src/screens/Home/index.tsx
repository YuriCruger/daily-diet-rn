import * as S from "./styles";
import logoImg from "@/assets/logo.png";
import ellipseImg from "@/assets/ellipse.png";
import { Button } from "@/components/Button";
import { Plus } from "phosphor-react-native";
import { SectionList, Text, TouchableOpacity } from "react-native";
import { MealCard } from "@/components/MealCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StatisticCard } from "@/components/StatisticCard";
import { useCallback, useState } from "react";
import { Meal } from "@/@types/meal";
import { mealGetAll } from "@/storage/meal/mealGetAll";
import { theme } from "@/theme";

interface MealSection {
  title: string;
  data: Meal[];
}

export function Home() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [mealSection, setMealSection] = useState<MealSection[]>([]);
  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      const data = await mealGetAll();

      setMeals(data);

      const groupedMeals: { [key: string]: Meal[] } = {};
      data.forEach((meal) => {
        if (!groupedMeals[meal.date]) {
          groupedMeals[meal.date] = [];
        }
        groupedMeals[meal.date].push(meal);
      });

      const sections: MealSection[] = Object.entries(groupedMeals).map(
        ([date, meals]) => ({
          title: date,
          data: meals,
        })
      );

      setMealSection(sections);
    } catch (error) {
      console.log(error);
    }
  }

  const dietMeals = meals?.filter((meal) => meal.diet === true).length || 0;

  const dietPercentage = meals?.length
    ? ((dietMeals / meals.length) * 100).toFixed(2).concat("%")
    : "0.00%";

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <S.HeaderHome>
        <S.Logo source={logoImg} />
        <S.ProfileImg source={ellipseImg} />
      </S.HeaderHome>

      <TouchableOpacity onPress={() => navigation.navigate("statistics")}>
        <StatisticCard
          value={dietPercentage}
          valueDescription="das refeições dentro da dieta"
          color={
            parseFloat(dietPercentage) >= 50
              ? theme.COLORS.GREEN_LIGHT
              : theme.COLORS.RED_LIGHT
          }
        >
          <S.ArrowUpRightIcon
            color={
              parseFloat(dietPercentage) >= 50
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
            }
          />
        </StatisticCard>
      </TouchableOpacity>

      <S.MealsSubtitle>Refeições</S.MealsSubtitle>
      <Button
        text="Nova refeição"
        onPress={() => navigation.navigate("newMeal")}
      >
        <Plus size={18} color="white" />
      </Button>

      <SectionList
        sections={mealSection}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealCard
            item={item}
            onPress={() =>
              navigation.navigate("meal", {
                id: item.id,
              })
            }
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionHeader>{title}</S.SectionHeader>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<S.ListFooterComponent />}
        ListEmptyComponent={
          <S.EmptyComponent>Nenhuma refeição cadastrada.</S.EmptyComponent>
        }
      />
    </S.Container>
  );
}
