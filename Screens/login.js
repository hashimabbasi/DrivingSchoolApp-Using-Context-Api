import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
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
      <Image source={props.icon} style={{ marginTop: 18, marginRight: 10 }} />
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
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
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
  },
  input: {
    flex: 1,
    height: 50,
    paddingRight: 10,
    padding: 10,
    paddingLeft: 0,
    fontSize: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#DFE1E5",
    color: "#1C1F24",
  },
});
export default Login;
