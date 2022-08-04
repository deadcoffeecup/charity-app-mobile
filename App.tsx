import { AuthProvider } from './provider/AuthProvider';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Button, Icon, IconButton, Text } from '@react-native-material/core';
import { Platform } from 'react-native';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { CustomHeaderButton } from './components/customHeaderButtons';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'Signup',
  'Login'
>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            options={{
              title: '',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title={'menu'}
                    iconName={'menu'}
                    onPress={() => {
                      alert('click');
                    }}
                  />
                </HeaderButtons>
              ),
              headerLeft: () => <Text>Logo</Text>,
            }}
            name='Login'
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name='Signup'
            component={Signup}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
