import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import logo from "../assets/Logo.png";
import loginImage from "../assets/loginImage.png";
import lockIcon from "../assets/lockIcon.png";
import passIcon from "../assets/passicon.png";
const Input = (props) => {
  var lenght = Dimensions.get("window").width;
  const [hidePass, setHidePass] = useState(true);
  lenght = lenght - 50;
  const [text, setText] = useState("");
  return (
    <View style={{ flexDirection: "row", paddingTop: 20, width: lenght }}>
      <Image source={props.icon} style={{ marginTop: 13, marginRight: 10 }} />
      <TextInput
        placeholder={props.text}
        // placeholderTextColor="#1C1F24"
        style={styles.input}
      />
    </View>
  );
};
const Login = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.images}>
          <Image source={logo} style={{ width: 147, height: 62 }} />
          <Image
            source={loginImage}
            style={{ width: 306, height: 191, marginTop: 50 }}
          />
        </View>
        <View style={styles.viewText}>
          <Text style={{ fontSize: 30 }}>Prihlás sa</Text>
          <Input icon={lockIcon} text="alex.pinto@gmail.com" />
          <Input icon={passIcon} text="Heslo" />
          <TouchableOpacity style={{ alignSelf: "flex-end", paddingTop: 10 }}>
            <Text style={{ color: "#03045E", fontWeight: "600" }}>
              Zabudnuté heslo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "400" }}>
              Prihlásiť sa
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 15,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Ešte nie si naším študentom? </Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  color: "#03045E",
                  fontWeight: "600",
                  fontSize: 15,
                  fontWeight: "700",
                }}
              >
                Staň sa ním teraz
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  images: {
    alignItems: "center",
  },
  viewText: {
    alignItems: "flex-start",
    marginTop: 20,
    paddingLeft: 20,
    width: Dimensions.get("window").width - 30,
  },
  input: {
    flex: 1,
    height: 40,
    paddingRight: 10,
    padding: 0,
    paddingLeft: 0,
    fontSize: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#DFE1E5",
    color: "#1C1F24",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#03045E",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 130,
    paddingRight: 130,
    marginTop: 10,
    borderRadius: 15,
  },
});
export default Login;
