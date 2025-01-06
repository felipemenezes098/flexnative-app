import { Text } from "@/components/ui/text";
import { TextInput } from "@/components/ui/text-input";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";

export function TextInputExample3() {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>With label</Text>
      <TextInput placeholder="Type something..." />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
