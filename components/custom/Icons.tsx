import React, { FC } from 'react';
import { Icon, IconComponent } from '@react-native-material/core';
import { IconComponentProvider } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';

export const CustomIcon: FC<any> = ({ children }) => {
  return (
    <IconComponentProvider
      IconComponent={Ionicons as IconComponent | null | undefined}
    >
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
export const MainViewIcon = () => {
  return (
    <CustomIcon>
      <Icon name='albums-outline' size={24} />
    </CustomIcon>
  );
};
export const UserIcon = () => {
  return (
    <CustomIcon>
      <Icon name='person-outline' size={24} />
    </CustomIcon>
  );
};
export const ShirtIcon = () => {
  return (
    <CustomIcon>
      <Icon name='shirt-outline' size={24} />
    </CustomIcon>
  );
};
