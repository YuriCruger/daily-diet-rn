import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

interface TitleProps {
  isDiet?: boolean;
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, isDiet }) => css`
    color: ${isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Bold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const IllustrationImg = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  width: 191px;
`;
