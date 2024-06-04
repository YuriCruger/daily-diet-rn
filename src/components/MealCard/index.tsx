import { Meal } from "@/@types/meal";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import { useRoute } from "@react-navigation/native";

interface MealCardProps extends TouchableOpacityProps {
  item: Meal;
}

export function MealCard({ item, ...rest }: MealCardProps) {
  return (
    <S.Container {...rest}>
      <S.Time>{item.time}</S.Time>
      <S.Divider />
      <S.MealName>{item.name}</S.MealName>
      <S.DietStatusIndicator isDiet={item.diet} />
    </S.Container>
  );
}
