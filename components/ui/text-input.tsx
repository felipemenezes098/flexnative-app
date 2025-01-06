import * as React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

export const TextInput = React.forwardRef<
  RNTextInput,
  React.ComponentPropsWithoutRef<typeof RNTextInput>
>(({ style, editable = true, ...props }, ref) => {
  const colors = getThemeColors();

  return (
    <RNTextInput
      ref={ref}
      style={[
        styles.input,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
          color: colors.text,
          opacity: editable ? 1 : 0.6,
        },
        style,
      ]}
      placeholderTextColor={colors["muted-foreground"]}
      editable={editable}
      {...props}
    />
  );
});

TextInput.displayName = "TextInput";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});