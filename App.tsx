import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Instructions } from './components/Instruction';
import { WelcomeBanner } from './components/WelcomeBanner';
import { WhoWeHelp } from './components/WhoWeHelp';
import { AuthProvider } from './provider/AuthProvider';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <Header />
        <ScrollView>
          <WelcomeBanner />
          <Instructions />
          <WhoWeHelp />
          <Footer />
        </ScrollView>
      </AuthProvider>
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
