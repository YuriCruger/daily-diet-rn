import styled from "styled-components/native";
import { Text } from "react-native";

interface TopProps {
  color?: string;
}

export const Top = styled.View<TopProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background-color: ${({ theme, color }) =>
    color ? color : theme.COLORS.GRAY_5};
`;

export const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;
