import { PageTitle } from "@/components/PageTitle";
import * as S from "./styles";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { YesNoSwitch } from "@/components/YesNoSwitch";
import { Button } from "@/components/Button";
import { mealGetUnique } from "@/storage/meal/mealGetUnique";
import { Meal } from "@/@types/meal";
import { mealUpdate } from "@/storage/meal/mealUpdate";

interface RouteParams {
  id: string;
}

export function EditMeal() {
  const [meal, setMeal] = useState<Meal | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");
  const [isDiet, setIsDiet] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const { id: mealId } = route.params as RouteParams;

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const onDateChange = (_: DateTimePickerEvent, date?: Date) => {
    const currentDate = date || selectedDate;
    setIsDatePickerVisible(Platform.OS === "ios");
    setSelectedDate(currentDate);

    let tempDate = new Date(currentDate);
    let formattedDateString =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setFormattedDate(formattedDateString);
  };

  const onTimeChange = (_: DateTimePickerEvent, time?: Date) => {
    const currentTime = time || selectedTime;
    setIsTimePickerVisible(Platform.OS === "ios");
    setSelectedTime(currentTime);

    let tempTime = new Date(currentTime);
    let formattedTimeString =
      tempTime.getHours().toString().padStart(2, "0") +
      ":" +
      tempTime.getMinutes().toString().padStart(2, "0");
    setFormattedTime(formattedTimeString);
  };

  const handleEditMeal = async () => {
    if (name.trim().length === 0) {
      return Alert.alert("Nome inválido", "Informe o nome da refeição");
    }
    if (description.trim().length === 0) {
      return Alert.alert(
        "Descrição inválida",
        "Informe a descrição da refeição"
      );
    }
    if (formattedDate.length === 0) {
      return Alert.alert("Data inválida", "Informe a data da refeição");
    }
    if (formattedTime.length === 0) {
      return Alert.alert("Hora inválida", "Informe a hora da refeição");
    }
    if (isDiet === undefined) {
      return Alert.alert("Dieta inválida", "Informe a dieta da refeição");
    }

    const mealEdited = {
      id: mealId,
      name,
      description,
      date: formattedDate,
      time: formattedTime,
      diet: isDiet,
    };

    await mealUpdate({
      mealId,
      updatedMeal: mealEdited,
    });

    navigation.navigate("meal", { id: mealId });
  };

  async function fetchMeal() {
    const data = await mealGetUnique({ mealId });

    if (data) {
      setMeal(data);
      setName(data.name);
      setDescription(data.description);
      const mealDate = parseDate(data.date);
      const mealTime = new Date(`1970-01-01T${data.time}:00`);
      setSelectedDate(mealDate);
      setFormattedDate(data.date);
      setSelectedTime(mealTime);
      setFormattedTime(data.time);
      setIsDiet(data.diet);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <>
      <PageTitle title="Editar refeição" />
      <S.Container>
        <Label label="Nome" />
        <Input onChangeText={setName} value={name} />

        <Label label="Descrição" />
        <Input
          isDescription
          multiline={true}
          textAlignVertical="top"
          numberOfLines={5}
          onChangeText={setDescription}
          value={description}
        />

        <S.MultipleFieldsContainer>
          <S.FieldContainer>
            <Label label="Data" />
            <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
              <Input value={formattedDate} editable={false} />
            </TouchableOpacity>
            {isDatePickerVisible && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedDate}
                mode="date"
                display="spinner"
                onChange={onDateChange}
              />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <Label label="Hora" />
            <TouchableOpacity onPress={() => setIsTimePickerVisible(true)}>
              <Input value={formattedTime} editable={false} />
            </TouchableOpacity>
            {isTimePickerVisible && (
              <DateTimePicker
                testID="timePicker"
                value={selectedTime}
                mode="time"
                display="spinner"
                onChange={onTimeChange}
              />
            )}
          </S.FieldContainer>
        </S.MultipleFieldsContainer>

        <Label label="Está dentro da dieta?" />
        <S.MultipleFieldsContainer>
          <S.FieldContainer>
            <YesNoSwitch
              option="Sim"
              isDiet={isDiet}
              onPress={() => setIsDiet(true)}
            />
          </S.FieldContainer>
          <S.FieldContainer>
            <YesNoSwitch
              option="Não"
              isDiet={isDiet}
              onPress={() => setIsDiet(false)}
            />
          </S.FieldContainer>
        </S.MultipleFieldsContainer>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <S.ButtonContainer>
            <Button text="Salvar alterações" onPress={handleEditMeal} />
          </S.ButtonContainer>
        </KeyboardAvoidingView>
      </S.Container>
    </>
  );
}
