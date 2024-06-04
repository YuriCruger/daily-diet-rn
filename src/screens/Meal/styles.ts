import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
  gap: 24px;
`;

export const TextContainer = styled.View`
  gap: 8px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DateTimeHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DietCard = styled.View`
  width: 144px;
  height: 34px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 1000px;
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

interface DietIndicator {
  isDiet?: boolean;
}

export const DietIndicator = styled.View<DietIndicator>`
  height: 8px;
  width: 8px;
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 4px;
`;

export const ButtonContainer = styled.View`
  gap: 12px;
  margin-top: auto;
`;
