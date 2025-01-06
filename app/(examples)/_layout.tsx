import { Text } from "react-native";
import { Tabs } from "expo-router";

import Feather from "@expo/vector-icons/Feather";

import { getThemeColors } from "@/theme/theme-colors";

export default function Layout() {
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
            borderTopWidth: 1,
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
            title: "Music",
            tabBarIcon: () => (
              <Feather name="music" size={24} color={colors["primary"]} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                  color: colors["primary"],
                }}
              >
                Music
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="auth/index"
          options={{
            title: "Auth",
            tabBarIcon: () => (
              <Feather name="user" size={24} color={colors["primary"]} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: focused ? "bold" : "normal",
                  color: colors["primary"],
                }}
              >
                Auth
              </Text>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
