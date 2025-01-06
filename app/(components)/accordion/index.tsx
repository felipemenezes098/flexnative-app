import { AccordionExample1 } from "@/components/examples/accordion/1-accordion";
import { AccordionExample2 } from "@/components/examples/accordion/2-accordion";
import { AccordionExample3 } from "@/components/examples/accordion/3-accordion";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";
export default function AccordionExample() {
  const colors = getThemeColors();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Accordion</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          Accordion is a component that allows you to display a list of items in
          a collapsible manner.
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Default</Text>
          <AccordionExample1 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Single</Text>
          <AccordionExample2 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Controlling the Active State</Text>
          <AccordionExample3 />
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
