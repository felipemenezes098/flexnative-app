import { getThemeColors } from "@/theme/theme-colors";
import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Separator = React.forwardRef<View, SeparatorProps>(
  ({ orientation = "horizontal", decorative = true, style, ...props }, ref) => {
    const colors = getThemeColors();

    return (
      <View
        ref={ref}
        role={decorative ? "presentation" : "separator"}
        style={[
          { backgroundColor: colors["border"] },
          orientation === "horizontal" ? styles.horizontal : styles.vertical,
          style,
        ]}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: "100%",
  },
  vertical: {
    width: 1,
    height: "100%",
  },
});

export { Separator };