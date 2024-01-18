import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTab=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      
    </Tab.Navigator>
  );
}
export default BottomTab;