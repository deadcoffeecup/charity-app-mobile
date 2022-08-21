import { Button, Text, Box } from '@react-native-material/core';
import React, { FC } from 'react';
import { Flex } from 'react-native-flex-layout';
import { StyleSheet } from 'react-native';

import { NavButton } from '../../custom/Buttons/NavButton';
import { CircleBox } from '../../custom/CircleBox';
import { useAuth } from '../../../context/AuthContext';

export const WhoWeHelp: FC = () => {
  const { currentUser } = useAuth();
  return (
    <Flex m={10} center>
      <Box m={20}>
        <Text variant='h5'>Komu pomagamy?</Text>
      </Box>
      <Flex items={'start'} inline>
        <Flex center w={'33%'}>
          <CircleBox>Funtacjom</CircleBox>
          <Text variant='caption'>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </Text>
        </Flex>

        <Flex center w={'33%'}>
          <CircleBox>Organizacjom pozarządowym</CircleBox>
          <Text variant='caption'>
            Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym,
            które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry
            pożytek z rzeczy, które do nich trafią.
          </Text>
        </Flex>
        <Flex center w={'33%'}>
          <CircleBox>Lokalnym zbiórkom</CircleBox>
          <Text variant='caption'>
            Wspieramy lokalne zbiórki organizowane przez indywidualne osoby,
            którym zależy na dobru społeczności, w której żyją. Sam też możesz
            zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.
          </Text>
        </Flex>
      </Flex>
      {!currentUser && (
        <>
          <Text variant='h5'>
            Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?
          </Text>
          <NavButton screen='Signup' title='Załóż konto' />
        </>
      )}
    </Flex>
  );
};
