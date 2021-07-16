import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Details from "./Details";
import Dashboard from "./Dashboard";

const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator>
    <MainStack.Screen
      options={{
        title: "Dashboard",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            color="#000"
            backgroundColor="white"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerTitleAlign: "center",
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <MainStack.Screen
      options={{
        title: "Details",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            color="#000"
            backgroundColor="white"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerTitleAlign: "center",
      }}
      name="Details"
      component={Details}
    />
  </MainStack.Navigator>
);

export default MainStackScreen;
