import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export const AddToDo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(-27)}px ${RFValue(24)}px 0 ${RFValue(24)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#808080",
})`
  height: ${RFValue(54)}px;
  flex: 1;
  background-color: #262626;
  border: 1px solid #0d0d0d;
  border-radius: 6px;
  font-family: Inter_400Regular;
  font-size: 16px;
  padding: ${RFValue(16)}px;
  color: #f2f2f2;
`;

export const SendButton = styled.TouchableOpacity`
  height: ${RFValue(54)}px;
  width: ${RFValue(54)}px;
  align-items: center;
  justify-content: center;
  background-color: #1e6f9f;
  border-radius: 6px;
  margin-left: ${RFValue(4)}px;
`;
