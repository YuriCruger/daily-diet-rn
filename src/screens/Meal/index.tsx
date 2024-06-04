import { PageTitle } from "@/components/PageTitle";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as S from "./styles";
import { useCallback, useState } from "react";
import { mealGetUnique } from "@/storage/meal/mealGetUnique";
import { Meal as MealType } from "@/@types/meal";
import { Button } from "@/components/Button";
import { mealDelete } from "@/storage/meal/mealDelete";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { theme } from "@/theme";
import { ModalConfirmation } from "@/components/ModalConfirmation";

interface RouteParams {
  id: string;
}

export function Meal() {
  const [meal, setMeal] = useState<MealType | undefined>(undefined);
  const [isOpenModal, setIsOpenModel] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id: mealId } = route.params as RouteParams;

  async function fetchMeals() {
    const data = await mealGetUnique({ mealId });

    setMeal(data);
  }

  function handleConfirmDelete() {
    handleDelete();
  }

  function handleCancelDelete() {
    setIsOpenModel(false);
  }

  async function handleDelete() {
    await mealDelete({ mealId });
    setIsOpenModel(false);
    navigation.navigate("home");
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <>
      <PageTitle
        title="Refeição"
        color={meal?.diet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
      />
      {isOpenModal && (
        <ModalConfirmation
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}

      <S.Container>
        <S.TextContainer>
          <S.Name>{meal?.name}</S.Name>
          <S.Description>{meal?.description}</S.Description>
        </S.TextContainer>

        <S.TextContainer>
          <S.DateTimeHeader>Data e hora</S.DateTimeHeader>
          <S.DateTime>
            {meal?.date} ás {meal?.time}
          </S.DateTime>
        </S.TextContainer>

        <S.DietCard>
          <S.DietIndicator isDiet={meal?.diet} />
          <S.DietText>
            {meal?.diet ? "dentro da dieta" : "fora da dieta"}
          </S.DietText>
        </S.DietCard>

        <S.ButtonContainer>
          <Button
            text="Editar refeição"
            onPress={() => navigation.navigate("editMeal", { id: mealId })}
          >
            <PencilSimpleLine size={18} color={theme.COLORS.WHITE} />
          </Button>
          <Button
            type="SECONDARY"
            text="Excluir refeição"
            onPress={() => setIsOpenModel(true)}
          >
            <Trash size={18} color={theme.COLORS.GRAY_1} />
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
