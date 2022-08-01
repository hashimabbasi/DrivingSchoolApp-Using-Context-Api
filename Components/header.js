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
import Zarf from "../assets/ZARF.png";
import Notification from "../assets/Notification.png";
import Call from "../assets/Call.png";
const Header = () => {
  return (
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
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingBottom: 20,
          width: Dimensions.get("window").width,
        }}
      >
        <Text style={{ fontSize: 27, fontFamily: "Roboto_700Bold" }}>
          Ahoj, študent!
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
});
export default Header;
