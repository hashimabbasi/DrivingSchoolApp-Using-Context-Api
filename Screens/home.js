import { useState, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
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
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Card } from "react-native-elements";
import Car from "../assets/Car.png";
import avatar from "../assets/avatar.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
import backimage from "../assets/backimage.png";
import Zarf from "../assets/ZARF.png";
import Notification from "../assets/Notification.png";
import Call from "../assets/Call.png";
import { SafeAreaView } from "react-native-safe-area-context";
const CustomCard = () => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomWidth: 0.8,
              marginBottom: 10,
              borderStyle: "dashed",
              borderColor: "#797D83",
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
                  NAPLÁNOVANÉ
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
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const Home = () => {
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
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
        <ScrollView>
          <View style={styles.container}>
            <View style={{elevation:5, marginBottom:10}}>
            <View style={styles.header}>
              <View>
                <Image source={Zarf} style={{ width: 82, height: 23 }} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={Call} style={{ width: 22, height: 22 }} />
                <Image source={Notification} style={{ marginLeft: 15 }} />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingBottom:20,
                width: Dimensions.get("window").width,
              }}
            >
              <Text style={{fontSize:27, fontFamily:'Roboto_700Bold'}}>Ahoj, študent!</Text>
            </View>
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
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
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
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
              </ScrollView>
            </View>
            <View>
              <LinearGradient
                colors={["transparent", "#4c669f"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0.3, 1]}
                style={styles.button}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      marginBottom: 5,
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "yellow",
                        fontSize: 16,
                        fontWeight: "bold",
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                      }}
                    >
                      Naplánovať novú jazdu
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </Fragment>
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
  button: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#03045E",
    paddingRight: 185,
    paddingLeft: 20,
    marginVertical: 10,
    paddingVertical: 50,
    borderRadius: 15,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
});
export default Home;
