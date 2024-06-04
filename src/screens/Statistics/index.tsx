import { StatisticCard } from "@/components/StatisticCard";
import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { mealGetAll } from "@/storage/meal/mealGetAll";
import { Meal } from "@/@types/meal";
import { theme } from "@/theme";

export function Statistics() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      const data = await mealGetAll();

      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  const totalMeals = meals?.length;
  const dietMeals = meals?.filter((meal) => meal.diet === true).length || 0;
  const nonDietMeals = totalMeals && totalMeals - dietMeals;

  let currentStreak = 0;
  let bestStreak = 0;

  if (meals) {
    meals.forEach((meal) => {
      currentStreak = meal.diet ? currentStreak + 1 : 0;
      bestStreak = currentStreak > bestStreak ? currentStreak : bestStreak;
    });
  }

  const dietPercentage = totalMeals
    ? ((dietMeals / totalMeals) * 100).toFixed(2).concat("%")
    : "0.00%";

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <S.Top
        color={
          parseFloat(dietPercentage) >= 50
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
        }
      />
      <SafeAreaView>
        <StatisticCard
          value={dietPercentage}
          valueDescription="das refeições dentro da dieta"
          color={
            parseFloat(dietPercentage) >= 50
              ? theme.COLORS.GREEN_LIGHT
              : theme.COLORS.RED_LIGHT
          }
        >
          <S.BackButton onPress={() => navigation.goBack()}>
            <ArrowLeft size={32} />
          </S.BackButton>
        </StatisticCard>
      </SafeAreaView>

      <S.ContainerGeneralStatistics>
        <S.Title>Estatísticas gerais</S.Title>
        <StatisticCard
          value={bestStreak.toString()}
          valueDescription="melhor sequência de pratos dentro da dieta"
          color={theme.COLORS.GRAY_6}
        />
        <StatisticCard
          value={totalMeals?.toString()}
          valueDescription="refeições registradas"
          color={theme.COLORS.GRAY_6}
        />

        <S.DoubleCardContent>
          <S.CardContent>
            <StatisticCard
              value={dietMeals.toString()}
              valueDescription="refeições dentro da dieta"
              color={theme.COLORS.GREEN_LIGHT}
            />
          </S.CardContent>

          <S.CardContent>
            <StatisticCard
              value={nonDietMeals?.toString()}
              valueDescription="refeições fora da dieta"
              color={theme.COLORS.RED_LIGHT}
            />
          </S.CardContent>
        </S.DoubleCardContent>
      </S.ContainerGeneralStatistics>
    </S.Container>
  );
}
