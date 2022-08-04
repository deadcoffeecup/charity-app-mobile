import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Instructions } from './components/Instruction';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { WelcomeBanner } from './components/WelcomeBanner';
import { WhoWeHelp } from './components/WhoWeHelp';
import { AuthProvider } from './provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from '@react-native-material/core';

function Dupa() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant='caption'>Dupa</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            options={{
              headerShown: false,
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
