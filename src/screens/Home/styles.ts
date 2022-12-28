import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: #262626;
  height: 100%;
  padding: 0 ${RFValue(24)}px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #808080;
  margin-top: ${RFValue(20)}px;
`;
