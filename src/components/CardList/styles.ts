import { CheckBox } from "@ui-kitten/components";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(64)}px;
  background-color: #333333;
  padding: ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px ${RFValue(12)}px;
  justify-content: space-between;
  align-items: center;
`;

export default styled(CheckBox)``;

export const Assignment = styled.Text`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-left: ${RFValue(8)}px;
`;

export const SendButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(4)}px;
`;
