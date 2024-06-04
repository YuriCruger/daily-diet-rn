import styled, { css } from "styled-components/native";
import { YesNoSwitchProps } from ".";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)<YesNoSwitchProps>`
  ${({ theme, isDiet, option }) => css`
    background-color: ${() => {
      if (isDiet === true && option === "Sim") return theme.COLORS.GREEN_LIGHT;
      if (isDiet === false && option === "Não") return theme.COLORS.RED_LIGHT;
      return theme.COLORS.GRAY_6;
    }};
    border: ${() => {
      if (isDiet === true && option === "Sim")
        return `1px solid ${theme.COLORS.GREEN_DARK}`;
      if (isDiet === false && option === "Não")
        return `1px solid ${theme.COLORS.RED_DARK}`;
      return "none";
    }};
  `}
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Circle = styled.View<YesNoSwitchProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, option }) =>
    option === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 9999px;
`;
