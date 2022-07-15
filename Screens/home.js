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
import Car from '../assets/Car.png'
const Card = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <View style={{flexDirection:'row', padding:25,borderBottomWidth:0.5,marginBottom:10,borderStyle:'dashed', borderColor:'grey'}}>
        <View style={{paddingRight:50}}>
        <Text
          style={{ backgroundColor: "yellow", fontSize: 12, fontWeight: "700" }}
        >
          NAPLÁNOVANÉ
        </Text>

        <Text style={styles.text}>Marec 28, 2022</Text>
        <Text style={styles.text}>15:30 - 17:00</Text>
        <Text style={{ color: "grey", fontSize: 12 }}>Volkswagen T-Cross</Text>
        </View>
        <View>
            <Image source={Car} style={{ width: 111, height: 62 }}/>
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#797D83",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13.25,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    padding:5,
    borderRadius: 15,
  },
});
export default Card;
