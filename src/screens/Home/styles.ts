import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface MyListProps extends FlatListProps<any> {}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #262626;
  flex: 1;
  padding: 0 ${RFValue(24)}px;
`;

export default styled(FlatList)<MyListProps>`
  width: 100%;
`;

export const Line = styled.View`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: #333333;
`;

export const Img = styled.Image`
  align-self: center;
  margin: ${RFValue(48)}px 0 ${RFValue(16)}px 0;
`;

export const EmptyText = styled.Text`
  align-self: center;
  font-size: ${RFValue(14)}px;
  font-family: Inter_400Regular;
  color: #808080;
`;
