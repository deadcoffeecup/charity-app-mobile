import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from './components/Header';
import { Instructions } from './components/Instruction';
import { WelcomeBanner } from './components/WelcomeBanner';
import { WhoWeHelp } from './components/WhoWeHelp';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <WelcomeBanner />
        <Instructions />
        <WhoWeHelp />
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 50,
    width: '100%',
  },
});
