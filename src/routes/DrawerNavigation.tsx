import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StackNavigation} from './StackNavigation';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
