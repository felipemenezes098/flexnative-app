import * as React from "react";
import {
  ScrollView as RNScrollView,
  StyleSheet,
  ScrollViewProps as RNScrollViewProps,
} from "react-native";

export type ScrollViewProps = RNScrollViewProps & {
  contentContainerStyle?: RNScrollViewProps["contentContainerStyle"];
};

export const ScrollView = React.forwardRef<RNScrollView, ScrollViewProps>(
  ({ style, contentContainerStyle, ...props }, ref) => {
    return (
      <RNScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={[styles.scrollView, style]}
        contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
        {...props}
      />
    );
  }
);

ScrollView.displayName = "ScrollView";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});