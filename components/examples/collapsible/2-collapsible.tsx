import {
  CollapsibleContent,
  CollapsibleRoot,
} from "@/components/ui/collapsible";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";
import { Pressable, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function CollapsibleExample2() {
  const [open, setOpen] = useState(false);
  const colors = getThemeColors();

  return (
    <CollapsibleRoot
      defaultOpen={false}
      open={open}
      onOpenChange={(isOpen) => setOpen(isOpen)}
      style={styles.collapsibleContainer}
    >
      <Pressable
        style={[
          styles.trigger,
          {
            borderColor: colors["border"],
          },
        ]}
        onPress={() => setOpen(!open)}
      >
        <Text
          style={[
            {
              fontWeight: open ? "bold" : "normal",
            },
          ]}
        >
          Flexnative/ui
        </Text>
        <Ionicons
          name="chevron-expand"
          size={24}
          color={colors.border}
          style={{
            transform: [{ rotate: open ? "90deg" : "0deg" }],
          }}
        />
      </Pressable>
      <CollapsibleContent
        style={[styles.content, { borderColor: colors["border"] }]}
      >
        <Text>Flexnative/ui</Text>
        <AntDesign name="check" size={24} color={colors.border} />
      </CollapsibleContent>
    </CollapsibleRoot>
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
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "auto",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    width: "auto",
    borderWidth: 1,
    padding: 10,
  },
});
