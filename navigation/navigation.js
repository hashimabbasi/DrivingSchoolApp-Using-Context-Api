import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ZARF from "../assets/ZARF.png";
import Login from "../Screens/login";
import Home from "../Screens/home";
import Calendar from "../Screens/BookingScreen";
import SchoolPlanner from "../Screens/SchoolPlanner";
import Notification from "../assets/Notification.png";
import Call from "../assets/Call.png";
const Drawer = createDrawerNavigator();
const Icons = () => {
  return (
    <View style={{ flexDirection: "row", marginRight: 10 }}>
      <TouchableOpacity>
        <Image source={Call} style={{ width: 22, height: 22 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Notification} style={{ marginLeft: 15 }} />
      </TouchableOpacity>
    </View>
  );
};
const navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 8,
          },
        }}
      >
        {/* <Drawer.Screen name="Login" component={Login}  options={{headerShown: false,  drawerItemStyle: { display: 'none' }}}/> */}
        {/* <Drawer.Screen name="Home" component={Home}  options={{headerShown:false,}}/> */}
        {/* <Drawer.Screen name="Calendar" component={Calendar} options={{headerShown:false,}} /> */}
        <Drawer.Screen
          name="School Planner"
          component={SchoolPlanner}
          options={{
            headerTitle: () => <Image source={ZARF} />,
            headerRight: () => <Icons />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default navigation;
