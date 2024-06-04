import { theme } from "@/theme";
import * as S from "./styles";

interface LabelProps {
  label: string;
}

export function Label({ label }: LabelProps) {
  return (
    <>
      <S.Label>{label}</S.Label>
    </>
  );
}
