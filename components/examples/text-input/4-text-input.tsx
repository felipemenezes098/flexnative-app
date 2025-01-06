import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";

export function TextInputExample4() {
  return (
    <View style={styles.contentContainer}>
      <TextInput style={styles.input} placeholder="Type something..." />
      <Button label="Subscribe" size="sm" />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
