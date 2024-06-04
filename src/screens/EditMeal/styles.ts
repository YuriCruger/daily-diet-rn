import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 40px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MultipleFieldsContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const FieldContainer = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
`;
