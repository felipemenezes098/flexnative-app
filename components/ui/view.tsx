import * as React from "react";
import {
  View as RNView,
  StyleSheet,
  ViewProps as RNViewProps,
} from "react-native";

export type ViewProps = RNViewProps;

export const View = React.forwardRef<RNView, ViewProps>(
  ({ style, ...props }, ref) => {
    return <RNView ref={ref} style={[styles.view, style]} {...props} />;
  }
);

View.displayName = "View";

const styles = StyleSheet.create({
  view: {
    padding: 0,
  },
});