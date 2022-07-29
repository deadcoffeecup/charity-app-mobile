import { Button, Text } from '@react-native-material/core';

import { Flex, Box } from 'react-native-flex-layout';
import { StyleSheet } from 'react-native';

import React from 'react';

export const WhoWeHelp = () => {
  return (
    <Flex m={10} center>
      <Box m={20}>
        <Text variant='h5'>Komu pomagamy?</Text>
      </Box>
      <Flex items={'start'} inline>
        <Flex center w={'33%'}>
          <Box style={styles.circle}>
            <Text style={styles.circleText}>Funtacjom</Text>
          </Box>
          <Text variant='caption'>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </Text>
        </Flex>

        <Flex center w={'33%'}>
          <Box style={styles.circle}>
            <Text style={styles.circleText}>Organizacjom pozarządowym</Text>
          </Box>
          <Text variant='caption'>
            Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym,
            które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry
            pożytek z rzeczy, które do nich trafią.
          </Text>
        </Flex>
        <Flex center w={'33%'}>
          <Box style={styles.circle}>
            <Text style={styles.circleText}>Lokalnym zbiórkom</Text>
          </Box>
          <Text variant='caption'>
            Wspieramy lokalne zbiórki organizowane przez indywidualne osoby,
            którym zależy na dobru społeczności, w której żyją. Sam też możesz
            zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.
          </Text>
        </Flex>
      </Flex>

      <Text variant='h5'>
        Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?
      </Text>
      <Button title='Załóż konto' />
    </Flex>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#00f',
  },
  circleText: {
    fontSize: 10,
    color: '#fff',
  },
});
