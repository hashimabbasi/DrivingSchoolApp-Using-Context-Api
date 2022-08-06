import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, Fragment } from "react";
import AppLoading from "expo-app-loading";
import Calendar from "../Components/Calendar";
import CustomCard from "../Components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
const ListHeader = () => {
    return(
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
          Najbližšie voľné jazdy
        </Text>
        <Text
          style={{
            fontSize: 13,
            paddingTop: 5,
            color: "#48CAE4",
            fontFamily: "Roboto_500Medium",
          }}
        >
          Zobraziť všetky
        </Text>
      </View>
    )
}
const SchoolPlanner = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_900Black,
  });
  const dummyArray = [
    {
      id: 1,
      name: "a",
      type: "NAPLÁNOVANÉ",
    },
    {
      id: 2,
      name: "b",
      type: "SCHEDULED",
    },
    {
      id: 3,
      name: "c",
      type: "SCHEDULED",
    },
    {
      id: 4,
      name: "d",
      type: "SCHEDULED",
    },
  ];
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
        <View style={styles.container}>
          <Calendar />
          <View
            style={{
              flex: 5.5,
              paddingHorizontal: 10,
              width: Dimensions.get("window").width,
              backgroundColor: "#F3F4F5",
            }}
          >
            <FlatList
            ListHeaderComponent={ListHeader}
              data={dummyArray}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View>
                    <CustomCard type={item.type} />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </Fragment>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SchoolPlanner;
