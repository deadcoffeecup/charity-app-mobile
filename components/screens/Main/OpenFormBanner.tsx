import { Button } from '@react-native-material/core';
import React, { FC } from 'react';
import { View } from 'react-native';
import { NavButton } from '../../custom/Buttons/NavButton';

export const OpenFormBanner: FC = () => {
  return (
    <View>
      <NavButton screen='Form' title='Oddaj rzeczy' />
    </View>
  );
};
