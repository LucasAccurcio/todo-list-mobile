
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Language } from '../screens/Language';
import { Home } from '@screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Language: undefined;
  Home: undefined;
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Language'>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Language' component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}