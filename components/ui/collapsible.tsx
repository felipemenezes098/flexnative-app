import React from "react";
import { StyleSheet, PressableStateCallbackType } from "react-native";
import * as CollapsiblePrimitive from "@rn-primitives/collapsible";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ style, children, ...props }, ref) => {
  const colors = getThemeColors();

  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      style={(state: PressableStateCallbackType) => [
        styles.trigger,
        state.pressed && styles.triggerPressed,
        typeof style === "function" ? style(state) : style,
      ]}
      {...props}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <Text style={[styles.triggerText, { color: colors.text }]}>
          {children}
        </Text>
      )}
    </CollapsiblePrimitive.Trigger>
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ style, children, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      style={[styles.content, style]}
      {...props}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{children}</Text>
      </View>
    </CollapsiblePrimitive.Content>
  );
});
CollapsibleContent.displayName = "CollapsibleContent";

const styles = StyleSheet.create({
  trigger: {
    borderRadius: 5,
  },
  triggerPressed: {},
  triggerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    overflow: "hidden",
  },
  contentContainer: {
    padding: 10,
    borderRadius: 5,
  },
  contentText: {
    fontSize: 14,
  },
});

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
