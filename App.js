import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
//screens

import Home from './screens/home'
import Profile from './screens/profile'
import Recents from './screens/recents'
import { color } from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      intitalRoute="Home"
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style={{backgroundColor: '#000'}}
      barStyle={{backgroundColor: '#0f0f0f' , padding: 4}}
      >
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='home' color={color} size={28} />
          )
        }}
        />
        
        <Tab.Screen 
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='camera-metering-spot' color={color} size={28} />
          )
        }}
        />
        
        <Tab.Screen 
        name="Recents" 
        component={Recents} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='account' color={color} size={28} />
          )
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default App;
