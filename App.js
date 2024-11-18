import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from './components/weather'; 
import Silabus from './components/sections/Section_1'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Silabus" component={Silabus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
