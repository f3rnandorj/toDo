import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type Color = string;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${RFValue(32)}px;
  justify-content: space-between;
`;

export const Created = styled.View`
  flex-direction: row;
`;
export const Completed = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text<{ color: Color }>`
  font-size: ${RFValue(14)}px;
  font-family: Inter_700Bold;
  color: ${(props) => props.color};
`;

export const Count = styled.View`
  width: ${RFValue(25)}px;
  height: ${RFValue(19)}px;
  background-color: #262626;
  color: #f2f2f2;
  margin-left: ${RFValue(8)}px;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;
