import React, { createContext, useContext, useState, ReactNode } from "react";
import { Pressable, View, StyleSheet, Animated, StyleProp } from "react-native";

import { getThemeColors } from "@/theme/theme-colors";
import { ViewStyle } from "react-native";

interface AccordionContextType {
  expandedItems: string[];
  toggleItem: (itemValue: string) => void;
  animated: boolean;
}

interface AccordionRootProps {
  children: ReactNode;
  multiple?: boolean;
  style?: StyleProp<ViewStyle>;
  defaultValue?: string[];
  onValueChange?: (expandedItems: string[]) => void;
  animated?: boolean;
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface AccordionTriggerProps {
  children: ReactNode | ((props: { isExpanded: boolean }) => ReactNode);
  style?: StyleProp<ViewStyle>;
}

interface AccordionContentProps {
  children: ReactNode | ((props: { isExpanded: boolean }) => ReactNode);
  style?: StyleProp<ViewStyle>;
}

const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<{
  value: string;
  isExpanded: boolean;
} | null>(null);

const AccordionRoot = ({
  children,
  multiple = false,
  defaultValue = [],
  onValueChange,
  animated = true,
  style,
}: AccordionRootProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultValue);

  const toggleItem = (itemValue: string) => {
    setExpandedItems((prev) => {
      const isExpanded = prev.includes(itemValue);
      let newExpanded: string[];
      if (multiple) {
        newExpanded = isExpanded
          ? prev.filter((value) => value !== itemValue)
          : [...prev, itemValue];
      } else {
        newExpanded = isExpanded ? [] : [itemValue];
      }
      onValueChange?.(newExpanded);
      return newExpanded;
    });
  };

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem, animated }}>
      <View style={style}>{children}</View>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, style }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an AccordionRoot");
  }

  const colors = getThemeColors();
  const isExpanded = context.expandedItems.includes(value);

  return (
    <View style={[styles.item, { borderBottomColor: colors.border }, style]}>
      <AccordionItemContext.Provider value={{ value, isExpanded }}>
        {children}
      </AccordionItemContext.Provider>
    </View>
  );
};

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Accordion components must be used within AccordionItem");
  }
  return context;
};

const AccordionTrigger = ({
  children,
  style,
  ...props
}: AccordionTriggerProps & { isExpanded?: boolean }) => {
  const { toggleItem } = useContext(AccordionContext) as AccordionContextType;
  const { value, isExpanded } = useAccordionItemContext();

  return (
    <Pressable
      onPress={() => toggleItem(value)}
      style={[styles.header, isExpanded && styles.headerExpanded, style]}
      {...props}
    >
      {typeof children === "function" ? children({ isExpanded }) : children}
    </Pressable>
  );
};

const AccordionContent = ({
  children,
  style,
  ...props
}: AccordionContentProps & { isExpanded?: boolean }) => {
  const { isExpanded } = useAccordionItemContext();
  const { animated } = useContext(AccordionContext) as AccordionContextType;
  const height = React.useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = React.useState<number | null>(null);

  const measureContent = (event: any) => {
    const { height: measuredHeight } = event.nativeEvent.layout;
    if (contentHeight === null) {
      setContentHeight(measuredHeight);
    }
  };

  React.useEffect(() => {
    if (contentHeight !== null) {
      if (animated) {
        Animated.timing(height, {
          toValue: isExpanded ? contentHeight : 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else {
        height.setValue(isExpanded ? contentHeight : 0);
      }
    }
  }, [isExpanded, contentHeight, animated]);

  return (
    <Animated.View
      style={[
        {
          height: contentHeight === null ? "auto" : height,
        },
        style,
      ]}
      {...props}
    >
      <View onLayout={measureContent} style={styles.contentContainer}>
        {typeof children === "function" ? children({ isExpanded }) : children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
    borderBottomWidth: 1,
  },
  header: {
    paddingVertical: 15,
  },
  headerExpanded: {},
  contentContainer: {
    paddingVertical: 10,
    paddingBottom: 15,
  },
});

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
