/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/page/Login/Login';
import Signup from './src/page/Signup/Signup';
import Home from './src/page/Home/Home';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon size={30} color={'red'} name="home-outline" />
          //   ),
          // }}
        />
        <Tab.Screen 
          name="Signup" 
          component={Signup}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon size={size} color={color} name="person-add-outline" />
          //   ),
          // }} 
        />
        <Tab.Screen 
          name="Login" 
          component={Login}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon size={size} color={color} name="log-in-outline" />
          //   ),
          // }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
