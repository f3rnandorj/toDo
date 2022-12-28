import Checkbox from "expo-checkbox";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(64)}px;
  background-color: #333333;
  padding: ${RFValue(15)}px;
  justify-content: space-between;
  align-items: center;
  border: ${RFValue(1)}px solid #262626;
  box-shadow: ${RFValue(0)}px ${RFValue(2)}px ${RFValue(8)}px
    rgba(0, 0, 0, 0.06);
  border-radius: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export default styled(Checkbox)`
  height: ${RFValue(17.5)}px;
  width: ${RFValue(17.5)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Assignment = styled.Text`
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: Inter_400Regular;
  font-size: ${RFValue(14)}px;
  color: #f2f2f2;
  padding-left: ${RFValue(8)}px;
`;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(4)}px;
`;
