import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 49px;
  border: 1px solid black;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  margin: 8px 0;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: black;
  margin: 0 12px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  flex: 1;
`;

interface DietStatusIndicatorProps {
  isDiet: boolean;
}

export const DietStatusIndicator = styled.View<DietStatusIndicatorProps>`
  height: 14px;
  width: 14px;
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 10px;
`;
