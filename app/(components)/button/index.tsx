import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";

export default function ButtonExample() {
  const colors = getThemeColors();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Button</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          Displays a button or a component that looks like a button.
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Button
            variant="default"
            label="Default"
            onPress={() => console.log("Default pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Secondary</Text>
          <Button
            variant="secondary"
            label="Secondary"
            onPress={() => console.log("Secondary pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Destructive</Text>
          <Button
            variant="destructive"
            label="Destructive"
            onPress={() => console.log("Destructive pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Outline</Text>
          <Button
            variant="outline"
            label="Outline"
            onPress={() => console.log("Outline pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Ghost</Text>
          <Button
            variant="ghost"
            label="Ghost"
            onPress={() => console.log("Ghost pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>With Icon</Text>
          <Button
            variant="default"
            icon={<Ionicons name="add" size={24} />}
            label="With Icon"
            onPress={() => console.log("With Icon pressed")}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Only Icon</Text>
          <Button
            variant="default"
            icon={<Ionicons name="add" />}
            size="icon"
            onPress={() => console.log("Only Icon pressed")}
          />
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
