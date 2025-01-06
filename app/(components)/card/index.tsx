import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";
import { CardExample1 } from "../../../components/examples/card/1-card";
import { CardExample2 } from "../../../components/examples/card/2-card";
import { ScrollView } from "@/components/ui/scroll-view";
export default function CardComponent() {
  const colors = getThemeColors();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Card</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          Displays a card with header, content, and footer.
        </Text>
      </View>

      <View style={styles.container}>
        <CardExample1 />
        <CardExample2 />
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
});
