import React, { FC } from 'react';
import { Icon, IconButton, Wrap } from '@react-native-material/core';
import { IconComponentProvider } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';

export const CustomIcon: FC<any> = ({ children }) => {
  return (
    <IconComponentProvider IconComponent={Ionicons}>
      {children}
    </IconComponentProvider>
  );
};
export const PickerIcon = () => {
  return (
    <CustomIcon>
      <Icon name='chevron-down-outline' size={24} color='#3339' />
    </CustomIcon>
  );
};
