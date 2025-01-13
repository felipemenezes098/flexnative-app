import * as React from "react";
import { StyleSheet, PressableStateCallbackType } from "react-native";
import * as AccordionPrimitive from "@rn-primitives/accordion";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { getThemeColors } from "@/theme/theme-colors";

import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";

import Ionicons from "@expo/vector-icons/Ionicons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ style, ...props }, ref) => {
  const colors = getThemeColors();
  return (
    <AccordionPrimitive.Item
      ref={ref}
      style={[styles.item, style, { borderColor: colors.border }]}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ style, children, ...props }, ref) => {
  const colors = getThemeColors();
  const { isExpanded } = AccordionPrimitive.useItemContext();

  const rotation = useSharedValue(0);
  React.useEffect(() => {
    rotation.value = withTiming(isExpanded ? 180 : 0, {
      duration: 300,
      easing: Easing.ease,
    });
  }, [isExpanded]);

  const chevronStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotation.value + "deg" }],
    };
  });

  return (
    <AccordionPrimitive.Trigger
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
        <View style={styles.triggerContent}>
          <Text style={styles.triggerText}>{children}</Text>
          <Animated.View style={chevronStyle}>
            <Ionicons name="chevron-down" color={colors.primary} size={18} />
          </Animated.View>
        </View>
      )}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ style, children, forceMount, ...props }, ref) => {
  const { isExpanded } = AccordionPrimitive.useItemContext();

  const height = useSharedValue(0);
  const [measuredHeight, setMeasuredHeight] = React.useState(0);

  const onLayout = React.useCallback((event: any) => {
    const { height } = event.nativeEvent.layout;
    setMeasuredHeight(height);
  }, []);

  React.useEffect(() => {
    if (!forceMount) {
      height.value = withTiming(isExpanded ? measuredHeight : 0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [isExpanded, measuredHeight, forceMount]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: forceMount ? measuredHeight : height.value,
    overflow: forceMount ? "visible" : "hidden",
  }));

  return (
    <Animated.View style={[styles.content, animatedStyle]} {...props}>
      <View onLayout={onLayout} style={styles.hiddenContent}>
        {children}
      </View>
    </Animated.View>
  );
});
AccordionContent.displayName = "AccordionContent";

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  triggerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trigger: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  triggerPressed: {
    opacity: 0.8,
  },
  triggerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    overflow: "hidden",
  },
  hiddenContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
});

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
