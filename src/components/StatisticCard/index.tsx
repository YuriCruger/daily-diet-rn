import { ReactNode } from "react";
import * as S from "./styles";

interface StatisticCardProps {
  value?: string;
  valueDescription: string;
  children?: ReactNode;
  color?: string;
}

export function StatisticCard({
  value = "0",
  valueDescription,
  children,
  color,
}: StatisticCardProps) {
  return (
    <S.Container color={color}>
      <S.Value>{value}</S.Value>
      <S.ValueDescription>{valueDescription}</S.ValueDescription>
      {children}
    </S.Container>
  );
}
