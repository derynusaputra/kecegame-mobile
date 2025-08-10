import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./BottomTab";
import HomeScreen from "../pages/Home/HomeScreen";
import ExamplePage from "../pages/Example/ExamplePage";
import Profile from "@src/pages/Profile/Profile";

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen
        name="Quis 1"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tips & Tricks"
        component={ExamplePage}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
