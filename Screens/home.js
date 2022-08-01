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
import Card from "../Components/Card";
import Header from "../Components/header";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
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
          <Header />
          <Card />
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
});
export default Home;
