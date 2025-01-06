import { TextInputExample1 } from "@/components/examples/text-input/1-text-input";
import { TextInputExample2 } from "@/components/examples/text-input/2-text-input";
import { TextInputExample3 } from "@/components/examples/text-input/3-text-input";
import { TextInputExample4 } from "@/components/examples/text-input/4-text-input";
import { TextInputExample5 } from "@/components/examples/text-input/5-text-input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";

export default function TextInputComponent() {
  const colors = getThemeColors();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Text Input</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          A customizable TextInput component with theme-based styling.
        </Text>
      </View>

      <View style={styles.container}>
        <TextInputExample1 />
        {/* <View style={styles.contentContainer}>
          <Text style={styles.title}>Disabled</Text>
          <TextInputExample2 />
        </View>
        <View style={styles.contentContainer}>
          <TextInputExample3 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>With button</Text>
          <TextInputExample4 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Form</Text>
          <TextInputExample5 />
        </View> */}
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
  contentContainer: {
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
