import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
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
const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.12;
const ITEM_HEIGHT = 70;
const ITEM_OFFSET = ITEM_WIDTH + 18;
//setting calendar dates
const Calendar = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  const Today = () => {
    const date = new Date();
    const day = date.getDate();
    return day;
  };
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const [DatesArray, setDatesArray] = useState([]);
  const [selected, setselected] = useState(Today());
  const data = useMemo(() => {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let numberOfDays = lastDay.getDate();
    const arrday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let data = [];
    var Day = date.getDay();
    var DATE = date.getDate();
    for (let i = 0, j = 0; i <= 6; i++, j++) {
      if (Day + j > 6) {
        Day = 0;
        j = 0;
      }
      if (numberOfDays < DATE + i) {
        DATE = 1;
        i = 0;
      }
      data.push({
        key: makeid(6),
        date: DATE + i,
        day: arrday[Day + j],
      });
    }
    setDatesArray(data);
    console.log(data);
    return data;
  }, []);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={DatesArray}
          keyExtractor={(item) => item.key.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={
                  selected == item.date ? styles.selected : styles.unselected
                }
                onPress={() => {
                  setselected(item.date);
                }}
              >
                <Text
                  style={
                    selected == item.date ? styles.daySelected : styles.day
                  }
                >
                  {item.day}
                </Text>
                <Text
                  style={
                    selected == item.date ? styles.dateSelected : styles.date
                  }
                >
                  {item.date}
                </Text>
              </Pressable>
            );
          }}
          contentContainerStyle={[
            { paddingBottom: 16, paddingLeft: 8, paddingRight: 0 },
          ]}
          getItemLayout={(_, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_OFFSET * index,
            index,
          })}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  unselected: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    borderColor: "#E5E8EE",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  selected: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: "#48CAE4",
    borderRadius: 12,
    borderColor: "#E5E8EE",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  day: {
    fontSize: 11,
    fontFamily: "Roboto_400Regular",
    color: "#797D83",
  },
  daySelected: {
    fontSize: 11,
    fontFamily: "Roboto_400Regular",
    color: "white",
  },
  date: {
    fontSize: 13,
    fontFamily: "Roboto_500Medium",
  },
  dateSelected: {
    fontSize: 13,
    fontFamily: "Roboto_500Medium",
    color: "white",
  },
});
export default Calendar;
