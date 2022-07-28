import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/login';
import Home from '../Screens/home';
const Drawer = createDrawerNavigator();
const navigation=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Login'>
      {/* <Drawer.Screen name="Login" component={Login}  options={{headerShown: false,  drawerItemStyle: { display: 'none' }}}/> */}
      <Drawer.Screen name="Home" component={Home}  options={{headerShown:false,}}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default navigation;