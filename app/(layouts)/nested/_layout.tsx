import { Text } from "react-native";
import { Tabs } from "expo-router";

import Feather from "@expo/vector-icons/Feather";

import { getThemeColors } from "@/theme/theme-colors";

export default function LayoutNested() {
  const colors = getThemeColors();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: colors["background"],
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 0,
            backgroundColor: colors["background"],
            borderTopWidth: 2,
            borderTopColor: colors["muted"],
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "normal",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Screen 1",
            tabBarIcon: () => (
              <Feather name="smartphone" size={24} color={colors["primary"]} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                  color: colors["primary"],
                }}
              >
                Screen 1
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="screen/index"
          options={{
            title: "Screen 2",
            tabBarIcon: () => (
              <Feather name="smartphone" size={24} color={colors["primary"]} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                  color: colors["primary"],
                }}
              >
                Screen 2
              </Text>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
