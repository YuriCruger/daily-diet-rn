import { theme } from "@/theme";
import * as S from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  isDescription?: boolean;
}

export function Input({ isDescription = false, ...rest }: InputProps) {
  return (
    <S.Input
      {...rest}
      isDescription={isDescription}
      selectionColor={theme.COLORS.GRAY_1}
    />
  );
}
