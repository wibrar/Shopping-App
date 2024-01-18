import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import Registerscreen from '../screens/Registerscreen';
import Search from '../screens/Search';
import Product from '../screens/Product';
import Catagoriesscreen from '../screens/Catagoriesscreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottmTab'>
        <Stack.Screen name="Login" component={Loginscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Registerscreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottmTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="Catagories" component={Catagoriesscreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
