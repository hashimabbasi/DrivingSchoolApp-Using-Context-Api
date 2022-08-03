import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useState, Fragment } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Calendar from "../Components/Calendar";
import CustomCard from "../Components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";
const BookingScreen = () => {
  return (
    <View style={styles.container}>
        <Calendar />
        <Text>asdasd</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BookingScreen;
