import { useState, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import CustomCard from "./CustomCard";
const Card = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "stretch",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Roboto_900Black" }}>
          Tvoje jazdy
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#48CAE4",
            fontFamily: "Roboto_500Medium",
          }}
        >
          Zobraziť všetky
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "stretch",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Roboto_900Black" }}>
          Tvoje teórie
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#48CAE4",
            fontFamily: "Roboto_500Medium",
          }}
        >
          Zobraziť všetky
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 13.25,
    fontFamily: "Roboto_500Medium",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default Card;
