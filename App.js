import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


import RegistrationScreen from './components/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './components/Screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
