import { Button } from "../Button";
import * as S from "./styles";

interface ModalConfirmationProps {
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
}

export function ModalConfirmation({
  handleConfirmDelete,
  handleCancelDelete,
}: ModalConfirmationProps) {
  return (
    <S.Container>
      <S.ModalBackground />
      <S.ConfirmationContainer>
        <S.Question>
          Deseja realmente excluir o registro da refeição?
        </S.Question>

        <S.ButtonsContainer>
          <S.ButtonContainer>
            <Button
              type="SECONDARY"
              text="Cancelar"
              onPress={handleCancelDelete}
            />
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button text="Sim, excluir" onPress={handleConfirmDelete} />
          </S.ButtonContainer>
        </S.ButtonsContainer>
      </S.ConfirmationContainer>
    </S.Container>
  );
}
