import React, { FC } from 'react';
import { Button } from 'react-native';

interface PropsType {
  navigation: any;
  title: string;
  screen: string;
}
export const NavButton: FC<PropsType> = ({ navigation, title, screen }) => {
  return <Button onPress={() => navigation.navigate(screen)} title={title} />;
};
