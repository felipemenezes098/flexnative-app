import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CollapsibleExample1() {
  const colors = getThemeColors();

  return (
      <CollapsibleRoot style={styles.collapsibleContainer}>
        <CollapsibleTrigger
          style={[
            styles.trigger,
            {
              borderColor: colors["border"],
            },
          ]}
        >
          <Text>Flexnative/ui</Text>
          <Ionicons name="chevron-expand" size={24} color={colors.border} />
        </CollapsibleTrigger>
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
