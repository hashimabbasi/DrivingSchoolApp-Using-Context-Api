import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useState, Fragment, useEffect } from "react";
import { Avatar } from "react-native-elements";
import Car from "../assets/Car.png";
import avatar from "../assets/avatar.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
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
//modal opens when user clicks on the custom card
const CustomCard = (props) => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <ScrollView>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                borderBottomWidth: 0.8,
                marginBottom: 10,
                borderStyle: "dashed",
                borderColor: "#797D83",
                justifyContent: "space-between",
              }}
            >
              <View style={{ paddingRight: 50 }}>
                <View
                  style={{
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "yellow",
                      fontSize: 9,
                      fontWeight: "500",
                      paddingVertical: 5,
                      paddingHorizontal: 5,
                      borderRadius: 5,
                      fontFamily: "Roboto_500Medium",
                    }}
                  >
                    {props.type}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={calendar} />
                  <Text style={styles.text}>Marec 28, 2022</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={clock} />
                  <Text style={styles.text}>15:30 - 17:00</Text>
                </View>
                <Text
                  style={{
                    color: "#797D83",
                    fontSize: 12,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  Volkswagen T-Cross
                </Text>
              </View>
              <View>
                <Image source={Car} style={{ width: 111, height: 62 }} />
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 5,
                paddingBottom: 5,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Avatar rounded source={avatar} />
                </View>
                <View style={{ paddingLeft: 5 }}>
                  <Text
                    style={{
                      color: "#797D83",
                      fontSize: 11,
                      fontFamily: "Roboto_400Regular",
                    }}
                  >
                    Inštruktor
                  </Text>
                  <Text style={{ fontSize: 13, fontWeight: "700" }}>
                    Ivan Kužel
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: "#1C1F24",
                    fontSize: 17,
                    fontFamily: "Roboto_700Bold",
                    paddingTop: 5,
                  }}
                >
                  Pondelok
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
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
  card: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 3,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default CustomCard;
