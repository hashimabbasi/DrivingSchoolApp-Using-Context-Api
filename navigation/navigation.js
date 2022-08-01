import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/login';
import Home from '../Screens/home';
import BookScreen from '../Screens/BookScreen';
import Calendar from '../Screens/BookingScreen';
const Drawer = createDrawerNavigator();
const navigation=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator >
    <Drawer.Screen name="Calendar" component={Calendar} />
      {/* <Drawer.Screen name="Login" component={Login}  options={{headerShown: false,  drawerItemStyle: { display: 'none' }}}/> */}
      <Drawer.Screen name="Home" component={Home}  options={{headerShown:false,}}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default navigation;