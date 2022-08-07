import { Button, Text } from '@react-native-material/core';
import React, { FC } from 'react';
import { View } from 'react-native';

export const Stats: FC<any> = ({ navigation }) => {
  return (
    <View>
      <Button
        title='Oddaj rzeczy'
        onPress={() => navigation.navigate('Form')}
      />
      <Text>Stats:</Text>
    </View>
  );
};
