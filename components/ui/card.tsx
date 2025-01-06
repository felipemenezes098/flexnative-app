import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { getThemeColors } from "@/theme/theme-colors";
import { TextProps } from "react-native";

type CardProps = TouchableOpacityProps & {
  isTouchable?: boolean;
  onPress?: () => void;
};

export const Card: React.FC<CardProps> = ({
  style,
  isTouchable = false,
  ...props
}) => {
  const colors = getThemeColors();
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
        style,
      ]}
      activeOpacity={isTouchable ? 0.5 : 1}
      {...props}
    />
  );
};

export const CardHeader: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View style={[styles.header, style]} {...props} />;
};

export const CardTitle: React.FC<TextProps> = ({ style, ...props }) => {
  const colors = getThemeColors();
  return (
    <Text style={[styles.title, { color: colors.text }, style]} {...props} />
  );
};

export const CardDescription: React.FC<TextProps> = ({ style, ...props }) => {
  const colors = getThemeColors();
  return (
    <Text
      style={[styles.description, { color: colors["muted-foreground"] }, style]}
      {...props}
    />
  );
};

export const CardContent: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View style={[styles.content, style]} {...props} />;
};

export const CardFooter: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View style={[styles.footer, style]} {...props} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  footer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});