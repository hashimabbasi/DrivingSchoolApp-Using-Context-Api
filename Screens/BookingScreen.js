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
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
    <View style={styles.container}>
        <Calendar />
    </View>
    </Fragment>
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
