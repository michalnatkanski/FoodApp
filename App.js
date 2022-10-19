
import React from 'react';
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
          }} />
          <Stack.Screen name="Details" component={Details} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>


  );
};

//sprawdzic na youtube ale:
//zrobic redux store do zmiany categories
//aby zmienic categories trzeba pobrac categories z typow jedzenia
//type jedzenia mozemy pobrac w utilsach z gettypes
//do get types przekazywane jest popular data i trzeba to gdzies wywolac
//przyklad uzycia w react-table repo
//errorBoundary ? wsadzic
//fetchdata UseEffect zrobic json jednego i odfiltrowac w helpersach
//zminifikowac popular data i categories data do jsona???

//do tego dorobic searcha z fund screenerrr


