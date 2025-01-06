import TabsExample1 from "@/components/examples/tabs/1-tabs";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";

export default function TabsComponent() {
  const colors = getThemeColors();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Tabs</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          A set of layered sections of content—known as tab panels—that are
          displayed one at a time.
        </Text>
      </View>

      <View style={styles.container}>
        <TabsExample1 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  infoContainer: {
    gap: 5,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  container: {
    gap: 30,
  },
});
