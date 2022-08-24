import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { DrawerNav } from './stack/Navigation';
import { AuthProvider } from './provider/AuthProvider';
import { store } from './app/store';
import { StatusBar } from 'expo-status-bar';
import { navigationRef } from './modules/RootNavigation';

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
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <Provider store={store}>
          <StatusBar />
          <DrawerNav />
        </Provider>
      </AuthProvider>
    </NavigationContainer>
  );
}
