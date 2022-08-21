import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Options } from './Options';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Feed' component={Options} />
    </Drawer.Navigator>
  );
}
