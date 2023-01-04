import Checkbox from "expo-checkbox";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface DecorationCheckedFontType {
  textDecoration: string;
  color: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(64)}px;
  background-color: #333333;
  justify-content: space-between;
  align-items: center;
  border: ${RFValue(1)}px solid #262626;
  box-shadow: ${RFValue(0)}px ${RFValue(2)}px ${RFValue(8)}px
    rgba(0, 0, 0, 0.06);
  border-radius: ${RFValue(8)}px;
  padding: 0 ${RFValue(15)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export default styled(Checkbox)`
  height: ${RFValue(17.5)}px;
  width: ${RFValue(17.5)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Assignment = styled.Text<DecorationCheckedFontType>`
  align-items: center;
  align-self: center;
  flex: 1;
  font-family: Inter_400Regular;
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.color};
  padding-left: ${RFValue(8)}px;
  padding-right: ${RFValue(8)}px;
  text-decoration: ${(props) => props.textDecoration};
`;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(4)}px;
`;
