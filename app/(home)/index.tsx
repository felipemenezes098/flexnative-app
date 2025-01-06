import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { components } from "@/data/components";

import { Item } from "../../components/screens/home/item";
import { Button } from "@/components/ui/button";
import { examples } from "@/data/examples";
import { docs } from "@/data/docs";
import { layouts } from "@/data/layouts";

import { router } from "expo-router";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>FlexNative UI</Text>
          <Text style={styles.headerDescription}>Welcome to FlexNative UI</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Components</Text>
          </View>
          <Button
            label="View All"
            size="sm"
            style={styles.infoButton}
            variant="ghost"
            onPress={() => router.push("/(components)")}
          />
        </View>
        <Item data={components} />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Examples</Text>
          </View>
        </View>
        <Item data={examples} />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Layouts</Text>
          </View>
        </View>
        <Item data={layouts} />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Docs</Text>
          </View>
        </View>
        <Item data={docs} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 16,
    paddingVertical: 16,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerTitleContainer: {
    flex: 1,
    gap: 4,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerDescription: {
    fontSize: 14,
  },
  container: {
    gap: 10,
  },
  infoContainer: {
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoDescription: {
    fontSize: 14,
  },
  infoButton: {
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
