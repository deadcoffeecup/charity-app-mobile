import { Button } from '@react-native-material/core';
import React, { FC } from 'react';
import { View } from 'react-native';

export const OpenFormBanner: FC<any> = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Form');
        }}
        title='Oddaj rzeczy'
      />
    </View>
  );
};
