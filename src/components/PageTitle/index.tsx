import { ArrowLeft } from "phosphor-react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PageTitleProps {
  title: string;
  color?: string;
}

export function PageTitle({ title, color }: PageTitleProps) {
  const navigation = useNavigation();

  return (
    <>
      <S.Top color={color} />
      <SafeAreaView>
        <S.Container>
          <S.BackButton onPress={() => navigation.navigate("home")}>
            <ArrowLeft size={24} />
          </S.BackButton>
          <S.Title>{title}</S.Title>
        </S.Container>
      </SafeAreaView>
    </>
  );
}
