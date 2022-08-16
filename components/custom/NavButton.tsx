import React, { FC } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

interface PropsType {
  navigation: any;
  title: string;
  screen: string;
}

export const StyledButton = styled(Button)`
  background-color: #0076dd;
  color: #fff;
  width: min-content;
  padding: 10px;
`;

export const NavButton: FC<PropsType> = ({ navigation, title, screen }) => {
  return (
    <StyledButton onPress={() => navigation.navigate(screen)} title={title} />
  );
};
