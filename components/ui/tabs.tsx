import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewProps,
  TextProps,
  TouchableOpacity,
} from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

export const TabsContext = React.createContext({
  activeTab: "",
  setActiveTab: (value: string) => {},
});

export const Tabs: React.FC<{
  defaultValue: string;
  children: React.ReactNode;
  style?: ViewProps["style"];
  onValueChange?: (value: string) => void;
}> = ({ defaultValue, children, style, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChange = (value: string) => {
    setActiveTab(value);
    if (onValueChange) onValueChange(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleChange }}>
      <View style={style}>{children}</View>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<{
  children: React.ReactNode;
  style?: ViewProps["style"];
}> = ({ children, style }) => {
  const colors = getThemeColors();
  return (
    <View style={[styles.tabsList, { backgroundColor: colors.muted }, style]}>
      {children}
    </View>
  );
};

export const TabsTrigger: React.FC<
  {
    value: string;
    children: React.ReactNode;
    style?: ViewProps["style"];
    textStyle?: TextProps["style"];
    isTouchable?: boolean;
    disabled?: boolean;
  } & ViewProps
> = ({
  value,
  children,
  style,
  textStyle,
  isTouchable,
  disabled,
  ...props
}) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  const colors = getThemeColors();

  return (
    <TouchableOpacity
      {...props}
      onPress={() => {
        if (!disabled) setActiveTab(value);
      }}
      style={[
        styles.tabTrigger,
        isActive && {
          borderColor: colors["primary-foreground"],
          backgroundColor: colors.background,
        },
        disabled && {
          opacity: 0.5,
        },
        style,
      ]}
      activeOpacity={isTouchable ? 0.5 : 1}
      disabled={disabled}
    >
      <Text
        style={[
          styles.tabText,
          { color: colors["muted-foreground"] },
          isActive && {
            color: colors["primary"],
            fontWeight: "bold",
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const TabsContent: React.FC<{
  value: string;
  children: React.ReactNode;
  style?: ViewProps["style"];
}> = ({ value, children, style }) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  tabsList: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 8,
    padding: 4,
    alignSelf: "center",
    width: "100%",
  },
  tabTrigger: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
});