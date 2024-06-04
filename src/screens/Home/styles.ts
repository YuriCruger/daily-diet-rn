import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const HeaderHome = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export const MealsSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 42px;
  margin-bottom: 8px;
`;

export const SectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.L}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 32px;
`;

export const ListFooterComponent = styled.View`
  height: 32px;
`;

interface ArrowUpRightIconProps {
  color: string;
}

export const ArrowUpRightIcon = styled(
  ArrowUpRight
).attrs<ArrowUpRightIconProps>(({ color, theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: color,
}))<ArrowUpRightIconProps>`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const EmptyComponent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
  margin-top: 40px;
`;
