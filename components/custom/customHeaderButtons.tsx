import React, { FC } from 'react';
import { Platform } from 'react-native';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform.OS === 'android' ? 'white' : 'black'}
    />
  );
};

export const MenuButton: FC = () => {
  const { logout } = useAuth();
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title={'menu'}
        iconName={'menu'}
        onPress={() => {
          logout();
          alert('logged out');
        }}
      />
    </HeaderButtons>
  );
};
