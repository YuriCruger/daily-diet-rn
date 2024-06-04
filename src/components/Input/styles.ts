import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

interface InputProps extends TextInputProps {
  isDescription?: boolean;
}

export const Input = styled.TextInput<InputProps>`
  ${({ theme, isDescription }) => css`
    border: 1px solid ${theme.COLORS.GRAY_1};
    background-color: ${theme.COLORS.GRAY_6};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    ${isDescription && "height: 142px;"}
  `}
  border-radius: 6px;
  padding: 14px;
  width: 100%;
  margin-bottom: 24px;
`;
