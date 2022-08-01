import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const BookScreen = () => {
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
  return <View style={styles.container}>
    <Text>BookScreen</Text>
    <CalendarList
  // Enable horizontal scrolling, default = false
  horizontal={true}
  // Enable paging on horizontal, default = false
  pagingEnabled={true}
  // Set custom calendarWidth.
  calendarWidth={20}
/>



  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BookScreen;