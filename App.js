import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import LoginForm from './components/Elements/RegisterForm/RegisterForm';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
