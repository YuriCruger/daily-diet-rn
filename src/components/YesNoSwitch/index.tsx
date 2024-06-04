import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export interface YesNoSwitchProps extends TouchableOpacityProps {
  option: "Sim" | "Não";
  isDiet?: boolean;
}

export function YesNoSwitch({ option, isDiet, ...rest }: YesNoSwitchProps) {
  return (
    <S.Container option={option} isDiet={isDiet} {...rest}>
      <S.Circle option={option} />
      <S.Text>{option}</S.Text>
    </S.Container>
  );
}
