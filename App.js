import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/login';
import Home from './Screens/home';
import Navigation from './navigation/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App () {
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});