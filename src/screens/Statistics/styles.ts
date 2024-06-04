import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

interface TopProps {
  color: string;
}

export const Top = styled.View<TopProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background-color: ${({ color }) => color};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 12px
`;

export const ContainerGeneralStatistics = styled.View`
  flex: 1;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  display: block;
  align-items: center;
  gap: 12px;
`;

export const DoubleCardContent = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const CardContent = styled.View`
  flex: 1;
`;
