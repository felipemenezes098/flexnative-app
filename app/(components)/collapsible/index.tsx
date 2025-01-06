import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import CollapsibleExample1 from "@/components/examples/collapsible/1-collapsible";
import CollapsibleExample2 from "@/components/examples/collapsible/2-collapsible";

export default function CollapsibleExample() {
  const colors = getThemeColors();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Collapsible</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          An interactive component which expands/collapses a panel.
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Default</Text>
          <CollapsibleExample1 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Controlling the Active State</Text>
          <CollapsibleExample2 />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
  contentContainer: {
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
