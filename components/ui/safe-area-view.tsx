import React from "react";
import { SafeAreaView as RNSafeAreaView, StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

export type SafeAreaViewProps = React.ComponentProps<typeof RNSafeAreaView>;

export const SafeAreaView = React.forwardRef<RNSafeAreaView, SafeAreaViewProps>(
  ({ style, ...props }, ref) => {
    const colors = getThemeColors();
    return (
      <RNSafeAreaView
        ref={ref}
        style={[
          styles.container,
          { backgroundColor: colors.background },
          style,
        ]}
        {...props}
      />
    );
  }
);

SafeAreaView.displayName = "SafeAreaView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});