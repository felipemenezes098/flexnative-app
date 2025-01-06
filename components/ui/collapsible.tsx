import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

interface CollapsibleContextType {
  open: boolean;
  toggle: () => void;
  disabled: boolean;
}

interface RootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

interface TriggerProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

interface ContentProps {
  children: ReactNode;
  forceMount?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error(
      "Collapsible compound components must be used within a CollapsibleRoot"
    );
  }
  return context;
};

export const CollapsibleRoot: React.FC<RootProps> = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  style,
}) => {
  const [openState, setOpenState] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : openState;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) {
      setOpenState(!open);
    }
    onOpenChange?.(!open);
  };

  return (
    <CollapsibleContext.Provider value={{ open, toggle, disabled }}>
      <View style={style}>{children}</View>
    </CollapsibleContext.Provider>
  );
};

export const CollapsibleTrigger: React.FC<TriggerProps> = ({
  children,
  disabled = false,
  onPress,
  style,
}) => {
  const { open, toggle } = useCollapsibleContext();

  const handlePress = (event: GestureResponderEvent) => {
    if (disabled) return;
    toggle();
    onPress?.(event);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.trigger, style]}
      accessibilityState={{ expanded: open, disabled }}
    >
      {children}
    </Pressable>
  );
};

export const CollapsibleContent: React.FC<ContentProps> = ({
  children,
  forceMount = false,
  style,
}) => {
  const { open } = useCollapsibleContext();

  if (!forceMount && !open) {
    return null;
  }

  return (
    <View style={styles.contentWrapper}>
      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  trigger: {
    paddingVertical: 10,
  },
  contentWrapper: {
    overflow: "visible",
  },
  content: {
    paddingVertical: 10,
  },
});