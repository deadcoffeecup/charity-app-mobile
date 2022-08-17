import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Text } from '@react-native-material/core';
import { Provider } from 'react-redux';

import { AuthProvider } from './provider/AuthProvider';
import { Login } from './components/screens/Login';
import { Signup } from './components/screens/Signup';
import Main from './components/screens/Main';
import Form from './components/screens/Form';
import { MenuButton } from './components/custom/customHeaderButtons';
import { store } from './app/store';
import { StatusBar } from 'expo-status-bar';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
  Form: undefined;
};

export type NavPropsType = NativeStackScreenProps<
  RootStackParamList,
  'Signup',
  'Login'
>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Provider store={store}>
          <StatusBar />
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
        </Provider>
      </AuthProvider>
    </NavigationContainer>
  );
}
