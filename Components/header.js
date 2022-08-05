import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import Zarf from "../assets/ZARF.png";
import Notification from "../assets/Notification.png";
import Call from "../assets/Call.png";
const Header = () => {
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
    <View style={{ overflow: 'hidden'}}>
    <View style={{ elevation: 6, backgroundColor: "white", marginBottom: 10 }}>
      <View style={styles.header}>
        <View>
          <Image source={Zarf} style={{ width: 82, height: 23 }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image source={Call} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Notification} style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
      }
};
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: Dimensions.get("window").width,
  },
});
export default Header;
