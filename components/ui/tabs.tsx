import React from "react";
import { StyleSheet, PressableStateCallbackType } from "react-native";
import * as TabsPrimitive from "@rn-primitives/tabs";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ style, ...props }, ref) => {
  const colors = getThemeColors();
  return (
    <TabsPrimitive.List
      ref={ref}
      style={[styles.list, { backgroundColor: colors.muted }, style]}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ style, children, value, disabled, ...props }, ref) => {
  const { value: activeTab } = TabsPrimitive.useRootContext();
  const colors = getThemeColors();

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      value={value}
      style={(state: PressableStateCallbackType) => [
        styles.trigger,
        activeTab === value && {
          borderColor: colors["primary-foreground"],
          backgroundColor: colors.background,
        },
        disabled && {
          opacity: 0.5,
        },
        state.pressed && styles.triggerPressed,
        typeof style === "function" ? style(state) : style,
      ]}
      disabled={disabled}
      {...props}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <Text
          style={[
            styles.triggerText,
            {
              color:
                activeTab === value
                  ? colors.primary
                  : colors["muted-foreground"],
              fontWeight: activeTab === value ? "bold" : "normal",
            },
          ]}
        >
          {children}
        </Text>
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ style, children, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} style={[styles.content, style]} {...props}>
    <View style={styles.contentContainer}>{children}</View>
  </TabsPrimitive.Content>
));
TabsContent.displayName = "TabsContent";

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 4,
    borderRadius: 8,
  },
  trigger: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triggerPressed: {},
  triggerText: {
    fontSize: 14,
    fontWeight: "500",
  },
  content: {},
  contentContainer: {
    flexDirection: "column",
  },
});

export { Tabs, TabsList, TabsTrigger, TabsContent };
