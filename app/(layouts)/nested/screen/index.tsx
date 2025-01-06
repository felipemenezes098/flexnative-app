import { Button } from "@/components/ui/button";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

export default function NestedLayoutScreen() {
  const colors = getThemeColors();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Nested Tab | 2</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          An example of a screen with nested navigation. Components here inherit
          layout properties from the nested root, such as tab-specific
          configurations.
        </Text>
        <Button
          label="Go to Home"
          onPress={() => router.replace("/")}
          size="sm"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 350,
  },
  button: {
    marginTop: 10,
    borderRadius: 100,
  },
});
