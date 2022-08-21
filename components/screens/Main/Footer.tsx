import { Box, Button, Flex, Text } from '@react-native-material/core';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../context/AuthContext';
import { NavButton } from '../../custom/Buttons/NavButton';

const NavLink = styled(Button)`
  color: cadetblue;
  //need to change it
`;

export const Footer: FC = () => {
  const { currentUser } = useAuth();
  return (
    <Box pb={100} m={10} h={200}>
      <Text>Skontaktuj się z nami</Text>
      <Flex items='start'>
        <NavLink title='Regulamin' variant='text' />
        <NavLink title='Polityka Prywatności' variant='text' />
        <NavLink
          title='Instrukcja jak spakować rzeczy do oddania'
          variant='text'
        />
      </Flex>
      {!currentUser && <NavButton screen='Signup' title='Załóż konto' />}
    </Box>
  );
};
