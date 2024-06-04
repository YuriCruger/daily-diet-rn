import styled, { css } from "styled-components/native";

interface ContainerProps {
  color?: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, color }) => color ?? theme.COLORS.GREEN_LIGHT};
  width: 100%;
  height: 102px;
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: relative;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ValueDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;
