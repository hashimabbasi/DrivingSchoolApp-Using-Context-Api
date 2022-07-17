import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Avatar, Card } from "react-native-elements";
import Car from "../assets/Car.png";
import avatar from "../assets/avatar.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
import backimage from "../assets/backimage.png";
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
              <Text style={{ color: "grey", fontSize: 12 }}>
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
              paddingVertical: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Avatar rounded source={avatar} />
              </View>
              <View style={{ paddingLeft: 5 }}>
                <Text style={{ color: "#797D83", fontSize: 11 }}>
                  Inštruktor
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "700" }}>
                  Ivan Kužel
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#1C1F24", fontSize: 18, fontWeight: "bold" }}
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
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "stretch",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tvoje jazdy </Text>
        <Text style={{ fontSize: 13, color: "#48CAE4", fontWeight: "600" }}>
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tvoje teórie </Text>
        <Text style={{ fontSize: 13, color: "#48CAE4", fontWeight: "600" }}>
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
      <View>
        <TouchableOpacity style={styles.button}>
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
    fontWeight: "600",
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 15,
    elevation: 3,
    marginVertical: 10,
  },
  button: {
    justifyContent:'center',
    width:'100%',
    backgroundColor: "#03045E",
    paddingRight:185,
    paddingLeft:20,
    marginTop: 10,
    paddingVertical:50,
    borderRadius: 15,
  },
});
export default Home;
