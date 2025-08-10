import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import PageA from '../pages/Example/PageA';
import PageB from '../pages/Example/PageB';
import PageC from '../pages/Example/PageC';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="PageA" component={PageA} />
      <Stack.Screen name="PageB" component={PageB} />
      <Stack.Screen name="PageC" component={PageC} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
