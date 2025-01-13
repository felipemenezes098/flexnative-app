import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { View } from "@/components/ui/view";

export default function CollapsibleExample2() {
  const [open, setOpen] = useState(false);

  const colors = getThemeColors();

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      style={styles.collapsibleContainer}
    >
      <CollapsibleTrigger>
        <View style={[styles.trigger, { borderColor: colors["border"] }]}>
          <Text
            style={[{ color: colors["text"] }, open && { fontWeight: "bold" }]}
          >
            Flexnative/ui
          </Text>
          <Ionicons
            name="chevron-down"
            size={24}
            color={colors["border"]}
            style={open && { transform: [{ rotate: "180deg" }] }}
          />
        </View>
      </CollapsibleTrigger>
      <CollapsibleContent
        style={[styles.content, { borderColor: colors["border"] }]}
      >
        Flexnative/ui: beautiful UI components for React Native.
      </CollapsibleContent>
    </Collapsible>
  );
}

const styles = StyleSheet.create({
  collapsibleContainer: {
    gap: 10,
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
  },
});
