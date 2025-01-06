import * as React from "react";
import {
  Text as RNText,
  StyleSheet,
  TextProps as RNTextProps,
} from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

export type TextProps = RNTextProps;

export const Text = React.forwardRef<RNText, TextProps>(
  ({ style, ...props }, ref) => {
    const colors = getThemeColors();

    return (
      <RNText
        ref={ref}
        style={[styles.text, { color: colors.text }, style]}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});