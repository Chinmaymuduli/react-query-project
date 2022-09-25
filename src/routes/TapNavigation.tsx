import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Details, HomeScreen} from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TapNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            color: 'gray',
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="apps-outline"
              size={24}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            color: 'gray',
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="menu-outline"
              size={24}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TapNavigation;

const styles = StyleSheet.create({});
