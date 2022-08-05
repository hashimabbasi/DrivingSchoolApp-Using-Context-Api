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
import Header from "../Components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
const BookingScreen = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });
  const dummyArray = [
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
    {
      id: 3,
      name: "c",
    },
    {
      id: 4,
      name: "d",
    },
  ];
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <View style={styles.container}>
        <Header />
        <Calendar />
        <View
          style={{
            flex: 4,
            paddingHorizontal: 10,
            width: Dimensions.get("window").width,
            backgroundColor: "#F3F4F5",
          }}
        >
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto_700Bold" }}>
              Tvoje jazdy
            </Text>
          </View>
          <FlatList
            data={dummyArray}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <CustomCard />
                </View>
              );
            }}
          />
        </View>
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
