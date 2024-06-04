import { Meal } from "@/@types/meal";
import * as S from "./styles";
import dietIllustration from "@/assets/diet-illustration.png";
import notDietIllustration from "@/assets/not-diet-illustration.png";
import { Button } from "@/components/Button";
import { mealGetAll } from "@/storage/meal/mealGetAll";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

export function Feedback() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      const data = await mealGetAll();

      setMeal(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <S.Container>
      <S.Title isDiet={meal?.diet}>
        {meal?.diet === true ? "Continue assim!" : "Que pena!"}
      </S.Title>
      {meal?.diet === true ? (
        <S.SubTitle>
          Você continua <S.Bold>dentro da dieta</S.Bold>. Muito bem!
        </S.SubTitle>
      ) : (
        <S.SubTitle>
          Você <S.Bold>saiu da dieta</S.Bold> dessa vez, mas continue se
          esforçando e não desista!
        </S.SubTitle>
      )}

      <S.IllustrationImg
        source={meal?.diet === true ? dietIllustration : notDietIllustration}
      />
      <S.ButtonContainer>
        <Button
          text="Ir para a página inicial"
          onPress={() => navigation.navigate("home")}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}
