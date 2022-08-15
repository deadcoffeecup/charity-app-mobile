import { IconButton, Text } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Wrap, Flex } from 'react-native-flex-layout';
import React from 'react';
import { StyleSheet } from 'react-native';

export const Instructions = () => {
  return (
    <Wrap center>
      <Text variant='h5'>Wystarczą 4 proste kroki</Text>
      <Flex items={'baseline'} justify='around' inline w={'100%'}>
        <Flex center w={'25%'}>
          <IconButton
            icon={(props) => (
              <Icon fontSize={100} name='access-point' {...props} size={20} />
            )}
          />
          <Text style={styles.text} variant='caption'>
            Wybierz rzeczy do oddania
          </Text>
        </Flex>
        <Flex center w={'25%'}>
          <IconButton
            icon={(props) => (
              <Icon fontSize={100} name='menu' {...props} size={20} />
            )}
          />
          <Text style={styles.text} variant='caption'>
            Spakuje je
          </Text>
        </Flex>
        <Flex center w={'25%'}>
          <IconButton
            icon={(props) => (
              <Icon fontSize={100} name='menu' {...props} size={20} />
            )}
          />
          <Text style={styles.text} variant='caption'>
            Zdecyduj komu chcesz pomóc
          </Text>
        </Flex>

        <Flex center w={'25%'}>
          <IconButton
            icon={(props) => (
              <Icon fontSize={100} name='menu' {...props} size={20} />
            )}
          />
          <Text style={styles.text} variant='caption'>
            Zamów kuriera w dogodnym terminie
          </Text>
        </Flex>
      </Flex>
    </Wrap>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
});
