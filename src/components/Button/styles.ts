import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

interface Props {
  type: ButtonTypeStyleProps;
}

export const Button = styled.TouchableOpacity<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_2
      : theme.COLORS.GRAY_7};
    border: ${type === "SECONDARY" && `1px solid ${theme.COLORS.GRAY_1}`};
  `}
  height: 50px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Text = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`;
