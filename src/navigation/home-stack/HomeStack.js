
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components
import Home from '../../views/home/home';
import Details from '../../views/home/details';

import { SCREENS } from '../constants';

const Stack = createNativeStackNavigator();

export default function HomeStack() {

  return (
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.HOME.HOME.ID} component={Home} options={{
            headerShown: false,
          }} />
          <Stack.Screen name={SCREENS.HOME.DETAILS.ID} component={Details} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
  );
};