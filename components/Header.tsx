import React from 'react';
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

export const Header = () => (
  <AppBar
    style={styles.appBar}
    // title='Title'
    leading={(props) => (
      <IconButton
        icon={(props) => <Icon name='dots-vertical' {...props} size={50} />}
        {...props}
      />
    )}
    trailing={(props) => (
      <HStack>
        <IconButton
          icon={(props) => (
            <Icon fontSize={100} name='menu' {...props} size={50} />
          )}
          {...props}
        />
      </HStack>
    )}
  />
);
const styles = StyleSheet.create({
  appBar: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: '100%',
    minHeight: 70,
    paddingHorizontal: 20,
  },
});
