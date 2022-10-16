
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components
import Home from './src/views/home/home';
import Details from './src/views/home/details';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Details" component={Details} options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};