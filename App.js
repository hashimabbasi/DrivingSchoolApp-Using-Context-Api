import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/login';
import Card from './Screens/home';
export default function App () {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});