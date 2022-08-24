import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from '../components/screens/Login';
import { Signup } from '../components/screens/Signup';
import Main from '../components/screens/Main';
import Form from '../components/screens/Form';
import { MenuButton } from '../components/custom/Buttons/MenuButton';
import { MainViewIcon, ShirtIcon, UserIcon } from '../components/custom/Icons';

import { navigate } from '../modules/RootNavigation';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  title: '',
  headerLeft: () => <ShirtIcon onPress={() => navigate('Main' as never)} />,
  headerRight: () => <MenuButton />,
};
const slideFromRight: NativeStackNavigationOptions | undefined = {
  animation: 'slide_from_right',
  headerBackVisible: true,
};
const StackFormNavigation = () => {
  return (
    <Stack.Navigator screenOptions={slideFromRight} initialRouteName='Form'>
      <Stack.Group screenOptions={slideFromRight}>
        <Stack.Screen options={screenOptions} name='Form' component={Form} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const StackUserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={slideFromRight} initialRouteName='Main'>
      <Stack.Group screenOptions={slideFromRight}>
        <Stack.Screen options={screenOptions} name='Login' component={Login} />
        <Stack.Screen
          options={screenOptions}
          name='Signup'
          component={Signup}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const StackMainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={slideFromRight} initialRouteName='Main'>
      <Stack.Group screenOptions={slideFromRight}>
        <Stack.Screen options={screenOptions} name='Main' component={Main} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'cadetblue',
        drawerPosition: 'right',
      }}
    >
      <Drawer.Group
        screenOptions={{
          drawerIcon: () => <MainViewIcon />,
        }}
      >
        <Drawer.Screen
          name={'Głowna'}
          component={StackMainNavigation}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group
        screenOptions={{
          drawerIcon: () => <UserIcon />,
        }}
      >
        <Drawer.Screen
          name={'Użytkownik'}
          component={StackUserNavigation}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group
        screenOptions={{
          drawerIcon: () => <ShirtIcon />,
        }}
      >
        <Drawer.Screen
          name={'Oddaj rzeczy'}
          component={StackFormNavigation}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
