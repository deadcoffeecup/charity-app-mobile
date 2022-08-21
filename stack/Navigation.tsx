import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Login } from '../components/screens/Login';
import { Signup } from '../components/screens/Signup';
import Main from '../components/screens/Main';
import Form from '../components/screens/Form';
import { MenuButton } from '../components/custom/customHeaderButtons';
import { Text } from '@react-native-material/core';
import { createDrawerNavigator } from '@react-navigation/drawer';

const slideLeftOptions = {
  animation: 'slide_from_right',
  headerBackVisible: true,
};
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        options={{
          title: '',
          headerRight: () => <MenuButton />,
          headerLeft: () => <Text>Main Logo</Text>,
        }}
        name='Login'
        component={Login}
      />
      <Stack.Screen
        options={{
          title: '',
          headerRight: () => <MenuButton />,
          headerLeft: () => <Text>Logo</Text>,
        }}
        name='Signup'
        component={Signup}
      />
      <Stack.Screen
        options={{
          title: '',
          headerRight: () => <MenuButton />,
          headerLeft: () => <Text>Logo</Text>,
        }}
        name='Main'
        component={Main}
      />
      <Stack.Screen
        options={{
          title: '',
          headerRight: () => <MenuButton />,
          headerLeft: () => <Text>Logo</Text>,
        }}
        name='Form'
        component={Form}
      />
    </Stack.Navigator>
  );
};
export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          // drawerActiveTintColor: Colors.primary,
        }
      }
    >
      <Drawer.Group
        screenOptions={
          {
            //   drawerIcon: () => (
            //     <Fontisto
            //       name={'shopping-store'}
            //       size={24}
            //       color={Colors.primaryDark}
            //     />
            //   ),
          }
        }
      >
        <Drawer.Screen
          name={'Shop'}
          component={Navigation}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group
        screenOptions={
          {
            //   drawerIcon: () => (
            //     <Ionicons
            //       name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            //       size={24}
            //       color={Colors.primaryDark}
            //     />
            //   ),
          }
        }
      >
        {/* <Drawer.Screen
          name={'Order'}
          component={StackOrderNavigator}
          options={{ headerShown: false }}
        /> */}
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
