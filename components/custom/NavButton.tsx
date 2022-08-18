import React, { FC } from 'react';
import { Button } from '@react-native-material/core';
import styled from 'styled-components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

interface PropsType {
  title: string;
  screen: keyof RootStackParamList;
}
export const StyledButton = styled(Button)`
  background-color: cadetblue;
  color: #fff;
  margin: 5px;
`;

export const NavButton: FC<PropsType> = ({ title, screen }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <StyledButton onPress={() => navigation.navigate(screen)} title={title} />
  );
};
