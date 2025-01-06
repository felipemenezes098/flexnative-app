import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  variant?: "default" | "secondary" | "destructive" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps & TouchableOpacityProps> = ({
  label,
  icon,
  onPress,
  style,
  labelStyle,
  iconStyle,
  variant = "default",
  size = "default",
  disabled,
  ...props
}) => {
  const colors = getThemeColors();

  let backgroundColor: string | undefined;
  let textColor: string | undefined;
  let borderColor: string | undefined;

  switch (variant) {
    case "default":
      backgroundColor = colors.primary;
      textColor = colors["primary-foreground"];
      break;
    case "secondary":
      backgroundColor = colors.muted;
      textColor = colors["primary"];
      break;
    case "destructive":
      backgroundColor = colors.destructive;
      textColor = colors["destructive-foreground"];
      break;
    case "ghost":
      backgroundColor = "transparent";
      textColor = colors["muted-foreground"];
      break;
    case "outline":
      backgroundColor = "transparent";
      textColor = colors.primary;
      borderColor = colors.border;
      break;
    default:
      backgroundColor = colors.primary;
      textColor = colors["primary-foreground"];
  }

  const isIconOnly = !!icon && !label;

  const buttonPadding = isIconOnly
    ? 0
    : size === "sm"
    ? 12
    : size === "lg"
    ? 20
    : 16;
  const buttonHeight = size === "sm" ? 40 : size === "lg" ? 56 : 38;
  const buttonWidth = isIconOnly ? buttonHeight : undefined;
  const textSize = size === "sm" ? 14 : size === "lg" ? 18 : 18;

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[
        styles.base,
        {
          backgroundColor,
          paddingHorizontal: buttonPadding,
          height: buttonHeight,
          width: buttonWidth,
          borderColor: borderColor,
          borderWidth: variant === "outline" ? 1 : 0,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      disabled={disabled}
    >
      {icon && (
        <View
          style={[styles.icon, iconStyle, isIconOnly && { marginRight: 0 }]}
        >
          {React.cloneElement(icon as React.ReactElement, {
            color: textColor,
            size: textSize,
          })}
        </View>
      )}
      {label && (
        <Text
          style={[
            styles.label,
            { color: textColor, fontSize: textSize },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  icon: {
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "500",
    textAlign: "center",
  },
});

export { Button };