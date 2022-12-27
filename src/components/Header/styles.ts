import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(173)}px;
  width: 100%;
  background-color: #0d0d0d;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(32)}px;
`;
