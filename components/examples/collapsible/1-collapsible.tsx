import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "@/components/ui/view";

export default function CollapsibleExample1() {
  const colors = getThemeColors();

  return (
    <Collapsible style={styles.collapsibleContainer}>
      <CollapsibleTrigger>
        <View
          style={[
            styles.trigger,
            {
              borderColor: colors["border"],
            },
          ]}
        >
          <Text>Flexnative/ui</Text>
          <Ionicons name="chevron-expand" size={24} color={colors.border} />
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
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
  },
});
