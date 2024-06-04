import { Plus } from "phosphor-react-native";
import * as S from "./styles";
import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  children?: ReactNode;
  type?: S.ButtonTypeStyleProps;
}

export function Button({
  text,
  type = "PRIMARY",
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Button type={type} {...rest}>
      {children}
      <S.Text type={type}>{text}</S.Text>
    </S.Button>
  );
}
