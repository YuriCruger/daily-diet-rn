import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  opacity: 0.25;
  position: absolute;
`;

export const ConfirmationContainer = styled.View`
  width: 327px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  z-index: 10;
  align-items: center;
  padding: 24px;
`;

export const Question = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    margin-bottom: 32px;
  `}
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;
